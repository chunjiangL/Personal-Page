import {Matrix4} from 'three/src/math/Matrix4.js';
import {Frustum} from 'three/src/math/Frustum.js';
import {Sphere} from 'three/src/math/Sphere.js';
import {compactDevice} from './device-budget.mjs';
import {collectWallOccluders,projectWallOccluders,sphereOccluded} from './street-occlusion.mjs';

export function classifyInstances(mesh,cameraFrustum,shadowFrusta,occlusion,fog){
 const geometry=mesh.geometry;
 if(!geometry.boundingSphere)geometry.computeBoundingSphere();
 const sphere=new Sphere(),matrix=new Matrix4(),shadow=[],color=[],hidden=[];
 for(let i=0;i<mesh.count;i++){
  matrix.fromArray(mesh.instanceMatrix.array,i*16).premultiply(mesh.matrixWorld);
  sphere.copy(geometry.boundingSphere).applyMatrix4(matrix);sphere.radius+=.15;
  const casts=mesh.castShadow&&shadowFrusta.some(f=>f.intersectsSphere(sphere));
  const view=fog?.view.elements,c=sphere.center;
  const fogged=view&&-(view[2]*c.x+view[6]*c.y+view[10]*c.z+view[14])-sphere.radius>fog.far;
  const seen=!fogged&&cameraFrustum.intersectsSphere(sphere)&&!sphereOccluded(sphere,occlusion);
  if(casts)shadow.push(i);else if(seen)color.push(i);else hidden.push(i);
 }
 return {indices:[...shadow,...color],shadowCount:shadow.length,hidden:hidden.length};
}

// The existing street culler retains whole instances for off-screen shadows.
// Partition that list again by the actual light frustum. The shadow pass draws
// only its prefix, while the main view keeps both visible and shadow-only poses.
// Each material batch is bounded separately: roof visibility no longer keeps
// all of that house's windows, door hardware and interior trim alive.
export function installStreetVisibility(stage,{enabled=compactDevice}={}){
 if(!enabled)return;
 const query=new URLSearchParams(location.search);
 if(query.has('qa')&&query.get('culling')==='off')return;
 const renderer=stage.renderer,originalDraw=renderer.renderBufferDirect;
 const shadowCounts=new WeakMap(),cache=new Map(),hiddenObjects=new Set(),scratch=new Matrix4(),mainFrustum=new Frustum();
 const stats={instances:0,retained:0,hidden:0,shadowInstances:0,shadowDrawsSkipped:0,colorDrawsSkipped:0,prepareMS:0,renderMS:0};
 let core,callback,disposed=false,wallTriangles,wallProjection,wallKey;
 renderer.renderBufferDirect=function(camera,scene,geometry,material,object,group){
  if(camera===stage.camera&&!stage.seated&&hiddenObjects.has(object.galleryInkOwner??object.userData.labInkOwner??object.uuid)){stats.colorDrawsSkipped++;return;}
  const count=shadowCounts.get(object);
  if(count===undefined||!(material.isMeshDepthMaterial||material.isMeshDistanceMaterial))return originalDraw.call(this,camera,scene,geometry,material,object,group);
  if(!count){stats.shadowDrawsSkipped++;return;}
  const full=object.count;object.count=Math.min(full,count);
  try{return originalDraw.call(this,camera,scene,geometry,material,object,group);}finally{object.count=full;}
 };
 function attach(){
  if(core||!stage.core)return;core=stage.core;
  const render=core.render;
  core.render=function(camera,...args){
   if(stage.seated||disposed){restore();return render.call(this,camera,...args);}
   const start=performance.now();
   mainFrustum.setFromProjectionMatrix(scratch.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
   const lights=[];
   stage.scene.traverseVisible(light=>{
    if(!light.isLight||!light.castShadow||!light.shadow)return;
    if(light.isPointLight){lights.push({planes:[],intersectsSphere:()=>true});return;}
    light.updateWorldMatrix(true,false);light.target.updateWorldMatrix(true,false);light.shadow.updateMatrices(light);
    const c=light.shadow.camera;
    lights.push(new Frustum().setFromProjectionMatrix(new Matrix4().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse)));
   });
   const viewKey=mainFrustum.planes.concat(...lights.map(f=>f.planes)).map(p=>[p.normal.x,p.normal.y,p.normal.z,p.constant].join(',')).join('|')+'|'+stage.scene.fog?.far;
   wallTriangles??=collectWallOccluders(stage.loaded.geometry.meshes.values());
   if(wallKey!==viewKey){wallProjection=projectWallOccluders(wallTriangles,camera);wallKey=viewKey;}
   Object.keys(stats).forEach(k=>stats[k]=0);
   stage.loaded.geometry.wrapper.updateMatrixWorld(true);
   hiddenObjects.clear();
   const bounds=new Sphere();
   for(const {partId,node}of stage.loaded.geometry.meshes.values()){
    if(node.isInstancedMesh||!node.visible||!node.parent?.visible||!/^building_|^street_/.test(partId)||node.parent.userData.street_vehicle)continue;
    if(!node.geometry.boundingSphere)node.geometry.computeBoundingSphere();
    bounds.copy(node.geometry.boundingSphere).applyMatrix4(node.matrixWorld);bounds.radius+=.15;
    if(!mainFrustum.intersectsSphere(bounds)||sphereOccluded(bounds,wallProjection))hiddenObjects.add(node.uuid);
   }
   for(const {node} of stage.loaded.geometry.meshes.values()){
    if(!node.isInstancedMesh||!node.userData.street_prop||!node.visible||!node.parent?.visible)continue;
    let entry=cache.get(node);
    if(!entry||entry.version!==node.instanceMatrix.version){entry={original:node.instanceMatrix.array.slice(),count:node.count};cache.set(node,entry);}
    if(entry.key!==viewKey){
     node.instanceMatrix.array.set(entry.original);node.count=entry.count;
     entry.result=classifyInstances(node,mainFrustum,lights,wallProjection,stage.scene.fog?.isFog?{view:camera.matrixWorldInverse,far:stage.scene.fog.far}:undefined);entry.key=viewKey;
     entry.result.indices.forEach((index,i)=>node.instanceMatrix.array.set(entry.original.subarray(index*16,index*16+16),i*16));
     node.count=entry.result.indices.length;node.instanceMatrix.needsUpdate=true;entry.version=node.instanceMatrix.version;
    }
    const result=entry.result,count=entry.count;
    stats.instances+=count;stats.retained+=result.indices.length;stats.hidden+=result.hidden;stats.shadowInstances+=result.shadowCount;
    shadowCounts.set(node,result.shadowCount);
   }
   stats.prepareMS=Math.round((performance.now()-start)*10)/10;
   const drawStart=performance.now();
   try{return render.call(this,camera,...args);}
   finally{
    stats.renderMS=Math.round((performance.now()-drawStart)*10)/10;
    const diagnostic=document.getElementById('viewer-diagnostics');
    if(diagnostic)diagnostic.dataset.visibility=JSON.stringify(stats);
   }
  };
 }
 function restore(){for(const [node,entry]of cache){node.instanceMatrix.array.set(entry.original);node.count=entry.count;node.instanceMatrix.needsUpdate=true;shadowCounts.delete(node);}cache.clear();hiddenObjects.clear();}
 Object.defineProperty(stage,'onBeforeFrame',{configurable:true,get:()=>before,set:value=>{callback=value;}});
 function before(...args){attach();return callback?.(...args);}
 const dispose=stage.dispose;
 stage.dispose=function(...args){disposed=true;restore();renderer.renderBufferDirect=originalDraw;return dispose.apply(this,args);};
}
