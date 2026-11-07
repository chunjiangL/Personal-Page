import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {DESK_OBJECTS,isDeskMesh,setDeskSeparation} from '../scripts/viewer/desk-inspection.mjs';
import {createRoomDesk,deskRange} from '../scripts/viewer/desk-room-view.mjs';

test('range views reuse the room GPU attributes and raycast only the specified component',()=>{
 const source=new T.BufferGeometry();
 for(const [key,buffer] of Object.entries({
  position:[0,0,0,1,0,0,0,1,0,3,0,0,4,0,0,3,1,0],
  normal:[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1],
  labStrokeUV:[0,0,1,0,0,1,0,0,1,0,0,1],
 }))source.setAttribute(key,new T.Float32BufferAttribute(buffer,key==='labStrokeUV'?2:3));
 const view=deskRange(source,{start:3,count:3});
 for(const key of Object.keys(source.attributes))assert.equal(view.attributes[key],source.attributes[key]);
 assert.deepEqual(view.boundingBox.min.toArray(),[3,0,0]);assert.deepEqual(view.boundingBox.max.toArray(),[4,1,0]);
 const node=new T.Mesh(view),ray=new T.Raycaster(new T.Vector3(.2,.2,1),new T.Vector3(0,0,-1));
 assert.equal(ray.intersectObject(node).length,0);ray.ray.origin.x=3.2;assert.equal(ray.intersectObject(node).length,1);
 assert.throws(()=>deskRange(source,{start:4,count:3}),/range/);
 view.dispose();node.material.dispose();source.dispose();
});

// Exercise the real component IDs and transforms of the shipped GLB. Here
// each material piece is represented by its primitive extents, so the test
// needs neither a browser nor asset-server traffic.
async function bedroomFixture(){
 const bytes=await fs.readFile(new URL('../assets/models/sketch-runtime/assemblies/bedroom.glb',import.meta.url));
 const gltf=JSON.parse(bytes.toString('utf8',20,20+bytes.readUInt32LE(12)));
 const material=new T.MeshStandardMaterial(),vertices=[],slices=[],expected=new Map();
 function transform(spec){
  return spec.matrix?new T.Matrix4().fromArray(spec.matrix):new T.Matrix4().compose(new T.Vector3(...(spec.translation??[0,0,0])),new T.Quaternion(...(spec.rotation??[0,0,0,1])),new T.Vector3(...(spec.scale??[1,1,1])));
 }
 function visit(i,parent,part){
  const n=gltf.nodes[i],m=new T.Matrix4().multiplyMatrices(parent,transform(n)),id=n.extras?.mesh_id;
  part=n.extras?.part_id??part;
  if(isDeskMesh(id)){
   const box=new T.Box3();
   for(const prim of gltf.meshes[n.mesh].primitives){
    const a=gltf.accessors[prim.attributes.POSITION];
    const g=new T.BoxGeometry(...a.max.map((v,i)=>v-a.min[i])).toNonIndexed();
    g.translate(...a.max.map((v,i)=>(v+a.min[i])/2));g.applyMatrix4(m);g.computeBoundingBox();box.union(g.boundingBox);
    slices.push({id,part,start:vertices.length/3,count:g.attributes.position.count});
    vertices.push(...g.attributes.position.array);g.dispose();
   }
   expected.set(id,box);
  }
  for(const j of n.children??[])visit(j,m,part);
 }
 for(const i of gltf.scenes[0].nodes)visit(i,new T.Matrix4());
 const geometry=new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(vertices,3));
 const node=new T.Mesh(geometry,material);node.userData.deskSlices=slices;
 const stage={scene:new T.Scene(),loaded:{geometry:{meshes:new Map([['batch',{id:'batch',node}]])},building:{homePlacement:{offset:[-2.05,1.55,1.58]}}},
  core:{contours:{localChildren:new Map()}}};
 return {stage,expected,geometry,material};
}

test('desk views preserve all five assemblies, their picking positions and exact reset poses across reuse',async()=>{
 const {stage,expected,geometry,material}=await bedroomFixture(),desk=createRoomDesk(stage);
 const offset=desk.proxyRoot.position,counts={monitor:34,keyboard:364,mouse:17,lamp:51,mini:31};
 assert.deepEqual(desk.objects.map(o=>o.id),DESK_OBJECTS.map(o=>o.id));
 let disposed=0;geometry.addEventListener('dispose',()=>disposed++);material.addEventListener('dispose',()=>disposed++);
 for(const object of desk.objects){
  const g=object.geometry;assert.equal(g.parts.size,counts[object.id]);
  const at=name=>g.parts.get(object.prefix+name).position;
  for(const [id,part] of g.parts){
   const a=new T.Box3().setFromObject(part),b=expected.get(id);
   assert.ok(a.min.distanceTo(b.min)<2e-6&&a.max.distanceTo(b.max)<2e-6);
  }
  const first=object.pickMeshes[0],model=[...g.meshes.values()][0].node;
  const pickBox=new T.Box3().setFromObject(first).translate(offset.clone().negate());
  assert.ok(pickBox.min.distanceTo(new T.Box3().setFromObject(model).min)<2e-6);
  assert.equal(model.geometry,first.geometry);assert.equal(model.geometry.attributes.position,geometry.attributes.position);
  setDeskSeparation(g,1);
  if(object.id==='monitor')assert.ok(at('front_bezel').z<at('display_surface').z&&at('display_surface').z<at('internal_display_pack').z);
  if(object.id==='keyboard')assert.ok(at('keycap_a').y-at('stem_a').y>.03&&at('stem_a').y-at('switch_a').y>.03);
  setDeskSeparation(g,.5);setDeskSeparation(g,0);
  for(const [id,part] of g.parts)assert.deepEqual(part.position,g.rest.get(id).position);
 }
 desk.dispose();assert.equal(disposed,0,'The room owns shared resources');geometry.dispose();material.dispose();
});
