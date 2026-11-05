import * as THREE from 'three';

export function framedCamera(box, direction, fov, aspect, padding = 1.14) {
  const target = box.getCenter(new THREE.Vector3());
  const backward = direction.clone().normalize();
  const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), backward).normalize();
  const up = new THREE.Vector3().crossVectors(backward, right).normalize();
  const tanY = Math.tan(THREE.MathUtils.degToRad(fov / 2));
  const tanX = tanY * aspect;
  let distance = 0;
  for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
    const corner = new THREE.Vector3(x, y, z).sub(target);
    distance = Math.max(distance, Math.abs(corner.dot(right)) * padding / tanX + corner.dot(backward), Math.abs(corner.dot(up)) * padding / tanY + corner.dot(backward));
  }
  return {target, position: target.clone().addScaledVector(backward, Math.max(distance, .25))};
}
