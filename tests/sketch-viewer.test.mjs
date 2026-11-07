import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {framedCamera} from '../scripts/viewer/scene-math.mjs';
import {applyGalleryLight, washDirection} from '../scripts/viewer/gallery-light.mjs';
import {daylightAt} from '../scripts/viewer/daylight.mjs';
import {CloudSun} from '../scripts/viewer/cloud-light.mjs';

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

test('light adjustments track the weather preset without compounding after a reframe', () => {
  const root=new THREE.Group(), rig=new THREE.Group(), light=new THREE.DirectionalLight();
  light.name='window';light.target.position.set(5,2,-4);light.position.copy(light.target.position).add(new THREE.Vector3(0,6,8));
  rig.add(light,light.target);
  const preset={id:'window',type:'directional',enabled:true,intensity:3.7,azimuth:125,elevation:38};
  const settings={lighting:{lights:[preset]}}, uniform=washDirection(root);
  const adjusted={strength:150,offset:-90};
  applyGalleryLight(root,rig,settings,adjusted);
  const position=light.position.clone();
  applyGalleryLight(root,rig,settings,adjusted);
  assert.ok(light.position.distanceTo(position)<1e-10);
  assert.ok(Math.abs(light.intensity-3.7*1.5)<1e-10);
  assert.ok(Math.abs(position.distanceTo(light.target.position)-10)<1e-10);
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(Math.atan2(uniform.z,uniform.x))-35)<1e-9);
  Object.assign(preset,{intensity:.9,azimuth:60,elevation:25});
  applyGalleryLight(root,rig,settings,adjusted);
  assert.ok(Math.abs(light.intensity-.9*1.5)<1e-10);
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(Math.atan2(uniform.z,uniform.x))+30)<1e-9);
  applyGalleryLight(root,rig,settings,{strength:0,offset:0});
  assert.equal(light.intensity,0);
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(Math.atan2(uniform.z,uniform.x))-60)<1e-9);
  assert.notEqual(uniform,washDirection(new THREE.Group()));
  assert.equal(preset.intensity,.9);
});

test('dawn and dusk cast from opposite horizons and Night keeps its independent moon pose', () => {
  const dawn=daylightAt(390), dusk=daylightAt(1050);
  assert.ok(dawn.dawn && !dusk.dawn);
  assert.ok(dawn.turn < -80 && dusk.turn > 80);
  assert.ok(dawn.height > 0 && dawn.height < .16);
  assert.equal(dusk.height,dawn.height);
  assert.ok(daylightAt(390,'rain').warmth < dawn.warmth);
  assert.equal(daylightAt(330).beam,0);
  assert.equal(daylightAt(1110).beam,0);
  assert.equal(daylightAt(720).beam,1);
  assert.deepEqual(daylightAt(390,'night'),daylightAt(720));
});

test('both low suns reach the bedroom window and cross opposite sides of the desk', () => {
  const root=new THREE.Group(), rig=new THREE.Group(), key=new THREE.DirectionalLight();
  key.name='window';key.position.set(0,5,8);rig.add(key,key.target);
  const lighting={lights:[{id:'window',type:'directional',enabled:true,intensity:3,azimuth:58,elevation:38}]};
  const pose=(minutes,offset=0)=>applyGalleryLight(root,rig,{lighting},{minutes,offset,strength:100},'sunny',true).clone();
  const dawn=pose(390), dusk=pose(1050);
  assert.ok(dawn.z>.4 && dusk.z>.4 && dawn.x>0 && dusk.x<0);
  assert.ok(dawn.y>0 && dawn.y<.16 && dusk.y>0 && dusk.y<.16);
  const deskView=new THREE.Vector3(-1.40,0,2.85).normalize();
  assert.ok(Math.abs(deskView.cross(pose(1015)).y)>.40,'The 16:55 shafts must cross the camera view');
  assert.ok(pose(390,180).z<0);
  const midday=pose(720);
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(Math.atan2(midday.z,midday.x))-58)<1e-9);
});

test('cloud ink follows intermediate light directions during a drag across the azimuth seam', () => {
  const sun=new CloudSun();
  sun.aim(175,35);
  sun.aim(-165,10);
  sun.update(1/60,false);
  assert.ok(sun.azimuth>175 && sun.azimuth<185);
  assert.ok(sun.elevation<35 && sun.elevation>10);
  const before=sun.direction.clone();
  sun.aim(-155,8);
  sun.update(1/60,false);
  assert.ok(before.angleTo(sun.direction)>0);
  for(let i=0;i<120;i++)sun.update(1/60,false);
  assert.equal(sun.azimuth,-155);
  assert.equal(sun.update(1/60,false),false);
  sun.aim(125,38);
  sun.update(1/60,true);
  assert.equal(sun.azimuth,125);
  assert.equal(sun.elevation,38);
});
