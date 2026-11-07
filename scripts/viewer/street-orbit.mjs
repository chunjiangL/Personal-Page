import {MathUtils, Spherical, Vector3} from 'three';

const horizontalLimit = 8; // degrees from each scene's authored pose
const verticalLimit = 4;
const pavementClearance = .65; // metres
// Opening composition measured from the lamp post and the corner facade.
export const streetOpeningView = Object.freeze({yaw: -7, pitch: 4, zoom: .8});
export const bedroomOpeningView = Object.freeze({yaw: 0, pitch: 0, zoom: 1});

// Two continuation lots sit on the right-hand end of the street camera's arc.
// Their parcel IDs also own the props inside each shop. Resolve those IDs by
// location so a change in plot ordering won't hide a different house.
const orbitLots = [
  {key: 'building_6', x: 30.25, z: 40.4},
  {key: 'building_1', x: 37.7, z: 26.25},
];

export function streetOrbitCutaways(placements) {
  const sources = new Set();
  for (const {key, matrix, source} of placements) {
    if (!source.startsWith('continuation_')) continue;
    const x = matrix.elements[12], z = matrix.elements[14];
    if (orbitLots.some(lot => lot.key === key && Math.abs(lot.x - x) < .01 && Math.abs(lot.z - z) < .01)) {
      sources.add(source);
    }
  }
  return sources;
}

export function createViewOrbit(camera, target, angles, changed, opening = streetOpeningView) {
  const pivot = new Vector3();
  const homeEye = new Vector3();
  const offset = new Vector3();
  const homeOrbit = new Spherical();
  const orbit = new Spherical();
  let minPitch = -verticalLimit;
  let framed = false;

  function apply() {
    if (!framed) return;
    if (angles.yaw === 0 && angles.pitch === 0) {
      camera.position.copy(homeEye);
    } else {
      // Orbit the eye about the world-space pivot. Positive yaw makes the
      // scene follow a rightward drag; positive pitch raises the eye.
      orbit.copy(homeOrbit);
      orbit.theta -= MathUtils.degToRad(angles.yaw);
      orbit.phi -= MathUtils.degToRad(angles.pitch);
      camera.position.setFromSpherical(orbit.makeSafe()).add(pivot);
    }
    target.copy(pivot);
    camera.lookAt(pivot);
    camera.updateMatrixWorld();
    changed();
  }

  function setAngles(yaw, pitch) {
    angles.yaw = MathUtils.clamp(yaw, -horizontalLimit, horizontalLimit);
    angles.pitch = MathUtils.clamp(pitch, minPitch, verticalLimit);
    apply();
  }

  function turn(yaw, pitch) {
    setAngles(angles.yaw + yaw, angles.pitch + pitch);
  }

  return {
    // Measure from the newly framed home pose, including after resize.
    capture(groundY, pivotFraction = 1) {
      pivot.copy(target);
      homeEye.copy(camera.position);
      if (pivotFraction !== 1) pivot.lerpVectors(homeEye, target, pivotFraction);
      homeOrbit.setFromVector3(offset.subVectors(homeEye, pivot));
      const minElevation = Math.asin(MathUtils.clamp((groundY + pavementClearance - pivot.y) / homeOrbit.radius, -1, 1));
      const homeElevation = Math.PI / 2 - homeOrbit.phi;
      minPitch = MathUtils.clamp(MathUtils.radToDeg(minElevation - homeElevation), -verticalLimit, 0);
      angles.pitch = MathUtils.clamp(angles.pitch, minPitch, verticalLimit);
      framed = true;
      apply();
    },
    drag(dx, dy, height) {
      if (height > 0) turn(dx * camera.fov / height, dy * camera.fov / height);
    },
    turn,
    reset() {
      setAngles(opening.yaw, opening.pitch);
    },
  };
}

