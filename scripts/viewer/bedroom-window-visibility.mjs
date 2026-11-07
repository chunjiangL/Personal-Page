import {Vector3} from 'three';

// The two south windows are the only exterior apertures in this apartment.
// Each plane faces into a window's viewing cone. Use full placement spheres
// and a small margin so silhouettes, bevels and ink outlines survive.
export function windowCones(eye, origin, windows) {
  return windows.map(pane => {
    const depth = origin.z + pane.z - eye.z;
    const left = origin.x + pane.x - pane.width / 2 - eye.x;
    const right = left + pane.width;
    const bottom = origin.y + pane.bottom - eye.y;
    const top = origin.y + pane.top - eye.y;
    return [
      new Vector3(depth, 0, -left), new Vector3(-depth, 0, right),
      new Vector3(0, depth, -bottom), new Vector3(0, -depth, top),
    ].map(normal => normal.normalize());
  });
}

export function seenThroughWindows(sphere, eye, cones) {
  const {x, y, z} = sphere.center;
  const margin = sphere.radius + .12;
  return cones.some(planes => planes.every(n =>
    n.x * (x - eye.x) + n.y * (y - eye.y) + n.z * (z - eye.z) >= -margin));
}

// Keep three prefixes in the same native instance buffer: street objects
// large enough to show ink while moving, visible fills, and the full set for
// the settled image. The projected near edge gives a conservative diameter.
export function orderWindowInstances(indices,spheres,eye,cones,camera,height) {
  const ink=[],fills=[],specks=[],outside=[];
  const view=camera.matrixWorldInverse.elements;
  const projection=height*Math.abs(camera.projectionMatrix.elements[5]);
  for(const index of indices){
    const sphere=spheres[index],{x,y,z}=sphere.center;
    if(!seenThroughWindows(sphere,eye,cones)){outside.push(index);continue;}
    const nearDepth=-(view[2]*x+view[6]*y+view[10]*z+view[14])-sphere.radius;
    const pixels=nearDepth>0?projection*sphere.radius/nearDepth:Infinity;
    if(pixels>=12)ink.push(index);
    else if(pixels>=3)fills.push(index);
    else specks.push(index);
  }
  indices.splice(0,indices.length,...ink,...fills,...specks,...outside);
  return {ink:ink.length,fill:ink.length+fills.length,full:indices.length-outside.length};
}

// The hero pane uses its own planar reflection. Only invoke the asset
// renderer's other glass passes when a visible material actually uses them.
export function hasTransmissiveSurface(scene) {
  let found=false;
  scene.traverseVisible(node=>{
    if(found||!node.isMesh)return;
    const material=node.material;
    found=Array.isArray(material)?material.some(m=>m.isMeshPhysicalMaterial&&m.transmission>0):
      !!material.isMeshPhysicalMaterial&&material.transmission>0;
  });
  return found;
}

// Native color, shadow and mirror passes share the same instance buffer.
// Only the main view draws the window-visible prefix. Other cameras still
// see the complete native list, including objects casting into the room.
export function limitBedroomDraws(stage) {
  const renderer = stage.renderer, draw = renderer.renderBufferDirect;
  renderer.renderBufferDirect = function(camera, scene, geometry, material, object, group) {
    const count = scene?.userData?.galleryMotion ? object.userData.galleryMotionCount : object.userData.galleryWindowCount;
    if (count === undefined || camera !== stage.camera || !stage.seated)
      return draw.call(this, camera, scene, geometry, material, object, group);
    if (!count) return;
    const instance = object.isInstancedMesh ? object : geometry;
    const key = object.isInstancedMesh ? 'count' : 'instanceCount';
    const full = instance[key];
    instance[key] = Math.min(full, count);
    try { return draw.call(this, camera, scene, geometry, material, object, group); }
    finally { instance[key] = full; }
  };
}
