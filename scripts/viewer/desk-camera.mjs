import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const directions={
 monitor:[1.42,.48,-.90],keyboard:[.48,1.05,-1.65],mouse:[.92,.68,-1.20],
 lamp:[1.0,.36,.54],mini:[-.92,.78,-1.12],
};

function corners(box){
 const points=[];
 for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])
  points.push(new T.Vector3(x,y,z));
 return points;
}

// Frame the actual pieces, including their travel, rather than the empty
// corners of a single large enclosing cuboid.
export function deskEnvelope(geometry){
 const points=[],bounds=new T.Box3(),offset=new T.Vector3();
 for(const part of geometry.parts.values()){
  const box=new T.Box3().setFromObject(part);
  offset.fromArray(part.userData.explode_offset);
  points.push(...corners(box),...corners(box.translate(offset)));
 }
 bounds.setFromPoints(points);
 return {points,bounds,center:bounds.getCenter(new T.Vector3()),span:bounds.getSize(new T.Vector3()).length()};
}

function frameDistance(envelope,direction,camera,aspect){
 const right=new T.Vector3().crossVectors(camera.up,direction).normalize();
 const up=new T.Vector3().crossVectors(direction,right).normalize();
 const tanY=Math.tan(T.MathUtils.degToRad(camera.fov/2)),tanX=tanY*aspect;
 const p=new T.Vector3();let distance=0;
 for(const point of envelope.points){
  p.subVectors(point,envelope.center);
  distance=Math.max(distance,p.dot(direction)+1.12*Math.max(Math.abs(p.dot(right))/tanX,Math.abs(p.dot(up))/tanY));
 }
 return distance;
}

export function createDeskCamera(camera,canvas,geometry,envelope,objectId,changed,showPart){
 const controls=new OrbitControls(camera,canvas),events=new AbortController();
 const home=new T.Vector3(...directions[objectId]).normalize(),delta=new T.Vector3();
 controls.minDistance=Math.max(.002,envelope.span*.014);
 controls.maxDistance=envelope.span*12;controls.rotateSpeed=.76;
 controls.addEventListener('change',changed);
 let focused,anchor=new T.Vector3(),lastAspect=camera.aspect;
 function reset(){
  focused=undefined;showPart('');
  controls.target.copy(envelope.center);
  camera.position.copy(controls.target).addScaledVector(home,frameDistance(envelope,home,camera,camera.aspect));
  controls.update();camera.updateMatrixWorld(true);changed();
 }
 function resize(aspect){
  const direction=camera.position.clone().sub(controls.target).normalize();
  const scale=frameDistance(envelope,direction,camera,aspect)/frameDistance(envelope,direction,camera,lastAspect);
  camera.aspect=aspect;camera.updateProjectionMatrix();lastAspect=aspect;
  camera.position.sub(controls.target).multiplyScalar(scale).add(controls.target);
  controls.update();changed();
 }
 function follow(){
  if(!focused)return;
  const next=focused.getWorldPosition(delta);
  next.sub(anchor);camera.position.add(next);controls.target.add(next);
  focused.getWorldPosition(anchor);controls.update();
 }
 const meshes=[...geometry.meshes.values()].map(record=>record.node);
 const ray=new T.Raycaster(),cursor=new T.Vector2();
 function pick(event){
  const rect=canvas.getBoundingClientRect();
  cursor.set((event.clientX-rect.left)/rect.width*2-1,1-(event.clientY-rect.top)/rect.height*2);
  ray.setFromCamera(cursor,camera);
  const hit=ray.intersectObjects(meshes,false)[0];
  if(!hit)return;
  focused=hit.object.parent;
  focused.getWorldPosition(anchor);
  const direction=camera.position.clone().sub(controls.target).normalize();
  const span=new T.Box3().setFromObject(focused).getSize(delta).length();
  const distance=Math.min(camera.position.distanceTo(controls.target),Math.max(envelope.span*.18,span*1.65));
  controls.target.copy(anchor);camera.position.copy(anchor).addScaledVector(direction,distance);
  controls.update();changed();showPart(focused.userData.label);
 }
 const pointers=new Set();let tap;
 function on(type,listener){canvas.addEventListener(type,listener,{signal:events.signal});}
 on('pointerdown',e=>{
  pointers.add(e.pointerId);tap=pointers.size===1&&e.button===0?{id:e.pointerId,x:e.clientX,y:e.clientY}:null;
  canvas.focus({preventScroll:true});
 });
 on('pointermove',e=>{if(tap&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)>5)tap=null;});
 on('pointerup',e=>{pointers.delete(e.pointerId);if(tap?.id===e.pointerId&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)<=5)pick(e);tap=null;});
 on('pointercancel',e=>{pointers.delete(e.pointerId);tap=null;});
 on('blur',()=>{pointers.clear();tap=null;});
 on('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey)return;
  const orbit=new T.Spherical().setFromVector3(delta.subVectors(camera.position,controls.target));
  switch(e.key){
   case 'ArrowLeft':orbit.theta-=Math.PI/18;break;
   case 'ArrowRight':orbit.theta+=Math.PI/18;break;
   case 'ArrowUp':orbit.phi-=Math.PI/18;break;
   case 'ArrowDown':orbit.phi+=Math.PI/18;break;
   case '+':case '=':orbit.radius/=1.2;break;
   case '-':orbit.radius*=1.2;break;
   case '0':case 'Home':e.preventDefault();reset();return;
   default:return;
  }
  e.preventDefault();orbit.phi=T.MathUtils.clamp(orbit.phi,.0001,Math.PI-.0001);
  orbit.radius=T.MathUtils.clamp(orbit.radius,controls.minDistance,controls.maxDistance);
  camera.position.setFromSpherical(orbit).add(controls.target);controls.update();changed();
 });
 canvas.tabIndex=0;reset();
 return {reset,resize,follow,dispose(){events.abort();controls.removeEventListener('change',changed);controls.dispose();}};
}
