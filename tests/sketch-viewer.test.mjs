import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {framedCamera} from '../scripts/viewer/scene-math.mjs';

test('camera framing keeps all scene corners inside desktop and portrait views', () => {
  const box=new THREE.Box3(new THREE.Vector3(-4,-.2,-3),new THREE.Vector3(3,2.8,6));
  for(const aspect of [.65,1,1.8]) {
    const pose=framedCamera(box,new THREE.Vector3(1,.8,-1),38,aspect);
    const camera=new THREE.PerspectiveCamera(38,aspect,.02,400);
    camera.position.copy(pose.position);camera.lookAt(pose.target);camera.updateMatrixWorld();
    for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
      const projected=new THREE.Vector3(x,y,z).project(camera);
      assert.ok(Math.abs(projected.x)<.9 && Math.abs(projected.y)<.9);
      assert.ok(projected.z>-1 && projected.z<1);
    }
  }
});
