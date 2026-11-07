import * as T from 'three';
import {mountingPairs} from './desk-layout.mjs';

export const DESK_OBJECTS=Object.freeze([
 {id:'monitor',label:'Monitor',prefix:'workstation_monitor_'},
 {id:'keyboard',label:'Keyboard',prefix:'workstation_keyboard_'},
 {id:'mouse',label:'Mouse',prefix:'workstation_mouse_'},
 {id:'lamp',label:'Desk lamp',prefix:'workstation_lamp_'},
 {id:'mini',label:'Mini computer',prefix:'workstation_mini_'},
]);

export function isDeskMesh(id){return typeof id==='string'&&DESK_OBJECTS.some(object=>id.startsWith(object.prefix));}

// Desk components follow their mechanical axes. Parts designed to nest
// (a key stem and its cap, for instance) share a footprint in the drawing.
export function setDeskSeparation(geometry,amount){
 for(const [id,part] of geometry.parts){
  const rest=geometry.rest.get(id).position,[x,y,z]=part.userData.explode_offset;
  part.position.set(rest.x+x*amount,rest.y+y*amount,rest.z+z*amount);
 }
 geometry.wrapper.updateMatrixWorld(true);
}

export function deskGuides(object,geometry,span){
 const pairs=[];
 for(const [tip,receiver] of mountingPairs[object.id]){
  const tipId=object.prefix+tip,end=geometry.parts.get(tipId),start=geometry.parts.get(object.prefix+receiver);
  if(start&&end)pairs.push({anchor:geometry.rest.get(tipId).position,start:start.userData.explode_offset,end:end.userData.explode_offset});
 }
 const lines=new T.BufferGeometry();
 const positions=new T.Float32BufferAttribute(pairs.length*6,3),distances=new T.Float32BufferAttribute(pairs.length*2,1);
 lines.setAttribute('position',positions);lines.setAttribute('lineDistance',distances);
 const material=new T.LineDashedMaterial({color:0x71858d,transparent:true,opacity:.52,dashSize:span*.009,gapSize:span*.006,depthWrite:false,toneMapped:false});
 const node=new T.LineSegments(lines,material);node.frustumCulled=false;node.renderOrder=2;
 return {node,update(amount){
  node.visible=amount>.04;
  for(const [i,{anchor,start,end}] of pairs.entries()){
   positions.setXYZ(2*i,anchor.x+start[0]*amount,anchor.y+start[1]*amount,anchor.z+start[2]*amount);
   positions.setXYZ(2*i+1,anchor.x+end[0]*amount,anchor.y+end[1]*amount,anchor.z+end[2]*amount);
   distances.setX(2*i+1,amount*Math.hypot(end[0]-start[0],end[1]-start[1],end[2]-start[2]));
  }
  positions.needsUpdate=distances.needsUpdate=true;
 },dispose(){node.removeFromParent();lines.dispose();material.dispose();}};
}
