import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PerspectiveCamera,Vector3,Fog} from 'three';
import {streetCameraPose,streetShotAt,streetShots,streetDuration,applyStreetProjection,createStreetPerspective} from '../scripts/viewer/street-perspective.mjs';

function setPose(camera,pose){
 camera.position.copy(pose.position);camera.fov=pose.fov;camera.lookAt(pose.target);
 camera.setViewOffset(camera.aspect*1000,1000,0,pose.shift*500,camera.aspect*1000,1000);
 applyStreetProjection(camera,pose);camera.updateMatrixWorld(true);
}
test('front opening is truly flat: equal objects at different depths have equal screen size',()=>{
 const shot=streetShotAt(0);assert.equal(shot.yaw,0);assert.equal(shot.elevation,0);assert.equal(shot.perspective,0);
 for(const aspect of [16/9,.65]){
  const camera=new PerspectiveCamera(45,aspect,.02,2000),pose=streetCameraPose(shot,aspect);setPose(camera,pose);
  const near=new Vector3(shot.x+3,shot.y+4,shot.z+4).project(camera);
  const far=new Vector3(shot.x+3,shot.y+4,shot.z-10).project(camera);
  assert.ok(Math.abs(near.x-far.x)<1e-12);assert.ok(Math.abs(near.y-far.y)<1e-12);
 }
});
test('projection morph preserves the facade size, upright verticals and near/far clipping',()=>{
 const shot=streetShotAt(0);
 for(const aspect of [16/9,.65]){
  const camera=new PerspectiveCamera(45,aspect,.02,2000);let baseline;
  for(const perspective of [0,.1,.5,.9,1]){
   const pose=streetCameraPose({...shot,perspective},aspect);setPose(camera,pose);
   const p=new Vector3(shot.x+3,shot.y+4,shot.z).project(camera),q=new Vector3(shot.x+3,shot.y+9,shot.z).project(camera);
   baseline??=p.clone();assert.ok(Math.abs(p.x-baseline.x)<1e-12&&Math.abs(p.y-baseline.y)<1e-12);assert.ok(Math.abs(p.x-q.x)<1e-12);
   for(const [depth,expected] of [[camera.near,-1],[camera.far,1]]){
    const point=pose.position.clone().add(new Vector3(0,0,-depth)).project(camera);assert.ok(Math.abs(point.z-expected)<1e-9);
   }
  }
 }
});
test('camera curve is finite and has continuous velocity across all shot boundaries',()=>{
 for(let time=0;time<=streetDuration;time+=.01){
  const shot=streetShotAt(time),pose=streetCameraPose(shot,16/9);
  assert.ok(Object.values(shot).every(Number.isFinite));assert.ok(pose.position.y>-6);
 }
 for(const [time] of streetShots.slice(1,-1)){
  const a=streetShotAt(time-.0001),b=streetShotAt(time),c=streetShotAt(time+.0001);
  for(const key of ['x','z','y','width','distance','perspective','elevation','yaw'])assert.ok(Math.abs((b[key]-a[key])*10000-(c[key]-b[key])*10000)<.2,key);
 }
});
test('fully expanded projection agrees with Three perspective before handing rendering back',()=>{
 const camera=new PerspectiveCamera(45,1.7,.02,1000),pose=streetCameraPose(streetShotAt(2),1.7);
 setPose(camera,pose);
 const points=[new Vector3(-8,4,10),new Vector3(3,-6,12),new Vector3(0,15,-5)];
 const projected=points.map(p=>p.clone().project(camera));
 camera.updateProjectionMatrix();
 for(let i=0;i<points.length;i++)assert.ok(points[i].clone().project(camera).distanceTo(projected[i])<1e-10);
});
function fixture(){
 const scene={fog:new Fog('#ffffff',72,260)};
 const prepare=function(){scene.fog.near=72;scene.fog.far=260;};
 const stage={camera:new PerspectiveCamera(48,1.7,.02,1000),viewTarget:new Vector3(0,2,0),atmosphere:{scene,prepare}};
 stage.camera.position.set(30,2,40);return stage;
}
test('native depth updates preserve orthographic projection; finish and dispose restore camera hooks',()=>{
 const stage=fixture(),eye=stage.camera.position.clone(),aim=stage.viewTarget.clone(),prepare=stage.atmosphere.prepare,projection=stage.camera.updateProjectionMatrix;
 const intro=createStreetPerspective(stage);
 for(const skip of [false,true]){
  intro.start();stage.camera.near=.1;stage.camera.updateProjectionMatrix();assert.equal(stage.camera.projectionMatrix.elements[15],1);
  assert.equal(stage.camera.userData.galleryPerspectiveHiddenPlots,undefined);
  if(skip)intro.finish();else{intro.update(.01,1000);intro.update(.05,1000+streetDuration*1000);}
  assert.equal(intro.active,false);assert.equal(intro.progress,1);
  assert.ok(stage.camera.position.equals(eye));assert.ok(stage.viewTarget.equals(aim));
  assert.equal(stage.camera.fov,48);assert.equal(stage.camera.near,.02);assert.equal(stage.camera.view.enabled,false);
  assert.equal(stage.camera.projectionMatrix.elements[15],0);
  stage.atmosphere.prepare();assert.equal(stage.atmosphere.scene.fog.near,72);
 }
 intro.dispose();assert.equal(stage.atmosphere.prepare,prepare);assert.equal(stage.camera.updateProjectionMatrix,projection);
});
test('suspending resets wall clock and fixed-shot inspection does not advance',()=>{
 const stage=fixture(),intro=createStreetPerspective(stage);intro.start();intro.update(.01,0);intro.pauseClock();intro.update(.01,100000);
 assert.ok(intro.progress<.01);intro.dispose();
 const fixed=createStreetPerspective(stage,{freezeAt:1});fixed.start();const p=stage.camera.position.clone();fixed.update(50,50000);
 assert.ok(stage.camera.position.equals(p));fixed.dispose();
});
test('traffic holds during the flat opening and resumes its previous state on skip',()=>{
 const stage=fixture();stage.trafficPaused=false;
 const intro=createStreetPerspective(stage);intro.start();assert.equal(stage.trafficPaused,true);
 intro.finish();assert.equal(stage.trafficPaused,false);
 stage.trafficPaused=true;intro.start();intro.update(3);assert.equal(stage.trafficPaused,true);intro.dispose();
 assert.equal(stage.trafficPaused,true);
});
