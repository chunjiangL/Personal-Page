import * as T from 'three';
import {LineSegments2} from 'three/addons/lines/LineSegments2.js';
import {LineSegmentsGeometry} from 'three/addons/lines/LineSegmentsGeometry.js';
import {DESK_OBJECTS,deskGuides} from './desk-inspection.mjs';
import {componentTravel} from './desk-layout.mjs';
import {deskEnvelope} from './desk-camera.mjs';

// A room batch is a concatenation of non-indexed material slots. Draw the
// original range with the original GPU attributes, at its own movable pivot.
export function deskRange(source,{start,count}){
 const position=source.getAttribute('position');
 if(source.index||start<0||count<=0||start+count>position.count)throw Error('Invalid desk component range');
 const view=new T.BufferGeometry(),point=new T.Vector3(),box=new T.Box3();
 for(const [name,attribute] of Object.entries(source.attributes))view.setAttribute(name,attribute);
 for(let i=start;i<start+count;i++)box.expandByPoint(point.fromBufferAttribute(position,i));
 view.setDrawRange(start,count);view.boundingBox=box;view.boundingSphere=box.getBoundingSphere(new T.Sphere());
 return view;
}

const vertexKey=p=>Math.round(p.x*1e5)+','+Math.round(p.y*1e5)+','+Math.round(p.z*1e5);
function hasEndpoints(piece,a,b){
 if(!piece.vertices){
  const {drawRange,attributes}=piece.view,point=new T.Vector3();
  piece.vertices=new Set();
  for(let i=drawRange.start;i<drawRange.start+drawRange.count;i++)
   piece.vertices.add(vertexKey(point.fromBufferAttribute(attributes.position,i)));
 }
 return piece.vertices.has(vertexKey(a))&&piece.vertices.has(vertexKey(b));
}

// Partition the already prepared crease strokes. Where component boxes
// overlap, use the endpoints to distinguish e.g. a socket from its tongue.
function copyStrokes(line,pieces,materials,owned){
 if(!line?.isLineSegments2||!line.geometry.instanceCount)return;
 const starts=line.geometry.getAttribute('instanceStart'),ends=line.geometry.getAttribute('instanceEnd');
 const a=new T.Vector3(),b=new T.Vector3();
 const lists=pieces.map(()=>[]),boxes=pieces.map(p=>p.view.boundingBox.clone().expandByScalar(.000015));
 for(let i=0;i<Math.min(starts.count,line.geometry.instanceCount);i++){
  a.fromBufferAttribute(starts,i);b.fromBufferAttribute(ends,i);
  const matches=[];
  for(let j=0;j<boxes.length;j++)if(boxes[j].containsPoint(a)&&boxes[j].containsPoint(b))matches.push(j);
  for(const j of matches)if(matches.length===1||hasEndpoints(pieces[j],a,b))lists[j].push(a.x,a.y,a.z,b.x,b.y,b.z);
 }
 for(const [i,values] of lists.entries()){
  if(!values.length)continue;
  let material=materials.get(line.material);
  if(!material){material=line.material.clone();materials.set(line.material,material);}
  const g=new LineSegmentsGeometry().setPositions(values),ink=new LineSegments2(g,material);
  ink.renderOrder=line.renderOrder;pieces[i].group.add(ink);owned.push(g);
 }
}

function bindBatch(record,profile,byId,studio){
 const source=record.node, pieces=[];
 for(const slice of source.userData.deskSlices){
  const view=deskRange(source.geometry,slice),mesh=new T.Mesh(view,source.material);
  studio.owned.push(view);
  let component=byId.get(slice.id);
  if(!component){
   component={id:slice.id,sourcePart:slice.part,box:new T.Box3(),group:new T.Group(),fills:[]};
   byId.set(slice.id,component);
  }
  component.group.add(mesh);component.box.union(view.boundingBox);component.fills.push(mesh);
  studio.bindings.push({mesh,source});
  pieces.push({view,group:component.group});
  if(!profile?.group.visible)continue;
  const original=profile.hulls.get(record.id);
  if(!original||profile.hullMaterial.uniforms.uWidth.value<=0||profile.hullMaterial.uniforms.uOpacity.value<=0)continue;
  let material=studio.materials.get(original.material);
  if(!material){material=original.material.clone();studio.materials.set(original.material,material);}
  const hull=new T.Mesh(view,material);hull.renderOrder=original.renderOrder;
  hull.onBeforeRender=()=>{
   const {center,radius}=view.boundingSphere,u=material.uniforms;
   u.uLabMeshBounds.value.set(center.x,center.y,center.z,radius*2);
   u.uContourLengthRatio.value=profile.contourComplexity.get(record.id)??0;
   material.uniformsNeedUpdate=true;
  };
  component.group.add(hull);
 }
 if(profile?.group.visible){
  copyStrokes(profile.lines.get(record.id),pieces,studio.materials,studio.owned);
  copyStrokes(profile.marked.get(record.id),pieces,studio.materials,studio.owned);
 }
}

export function createRoomDesk(stage){
 const scene=new T.Scene(),rig=new T.Group(),proxyRoot=new T.Group(),objects=[];
 const studio={scene,rig,proxyRoot,objects,materials:new Map(),owned:[],bindings:[]};
 const key=new T.DirectionalLight('#fff5df',2.6),fill=new T.DirectionalLight('#edf1ee',1.25);
 key.name='window';key.position.set(-1,1,-1);fill.name='room_fill';
 const angle=T.MathUtils.degToRad(55),elevation=T.MathUtils.degToRad(35);
 fill.position.set(Math.cos(angle)*Math.cos(elevation),Math.sin(elevation),Math.sin(angle)*Math.cos(elevation));
 rig.add(key,key.target,fill,fill.target,new T.AmbientLight(0xffffff,.78));scene.add(rig);
 scene.environment=stage.scene.environment;scene.environmentIntensity=.3;
 const byId=new Map();
 for(const record of stage.loaded.geometry.meshes.values())if(record.node.userData.deskSlices)
  bindBatch(record,stage.core.contours.localChildren.get(record.id),byId,studio);
 proxyRoot.position.fromArray(stage.loaded.building.homePlacement.offset);
 for(const definition of DESK_OBJECTS){
  const components=[...byId.values()].filter(c=>c.id.startsWith(definition.prefix));
  if(!components.length)throw Error('Missing bedroom geometry for '+definition.label);
  const wrapper=new T.Group(),geometry={wrapper,parts:new Map(),rest:new Map(),meshes:new Map()};
  const pickMeshes=[],box=new T.Box3();
  for(const c of components)box.union(c.box);
  const center=box.getCenter(new T.Vector3());
  for(const c of components){
   const pivot=c.box.getCenter(new T.Vector3()),suffix=c.id.slice(definition.prefix.length),group=c.group;
   group.userData={part_id:c.id,source_part_id:c.sourcePart,label:suffix.replaceAll('_',' '),
    explode_offset:componentTravel(definition.id,suffix,pivot.clone().sub(center))};
   group.position.copy(pivot);for(const node of group.children)node.position.copy(pivot).negate();
   wrapper.add(group);geometry.parts.set(c.id,group);geometry.rest.set(c.id,{position:pivot});
   for(const [i,mesh] of c.fills.entries()){
    geometry.meshes.set(c.id+'/'+i,{node:mesh});
    const proxy=new T.Mesh(mesh.geometry,mesh.material);proxyRoot.add(proxy);pickMeshes.push(proxy);
   }
  }
  wrapper.updateMatrixWorld(true);
  const envelope=deskEnvelope(geometry),guides=deskGuides(definition,geometry,envelope.span);
  wrapper.add(guides.node);wrapper.visible=false;scene.add(wrapper);
  objects.push({...definition,geometry,envelope,guides,pickMeshes,proxyRoot});
 }
 proxyRoot.updateMatrixWorld(true);
 studio.resize=(width,height)=>{
  for(const material of studio.materials.values()){
   if(material.isLineMaterial)material.resolution.set(width,height);
   else material.uniforms?.uLabViewport?.value.set(width,height);
  }
 };
 studio.dispose=()=>{
  for(const o of objects)o.guides.dispose();
  for(const g of studio.owned)g.dispose();
  for(const m of studio.materials.values())m.dispose();
  scene.clear();proxyRoot.clear();
 };
 return studio;
}
