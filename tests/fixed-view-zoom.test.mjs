import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createFixedViewZoom,wheelZoomFactor,zoomLimits,zoomFov} from '../scripts/viewer/fixed-view-zoom.mjs';
import {createViewOrbit,streetOrbitCutaways,streetOpeningView,bedroomOpeningView} from '../scripts/viewer/street-orbit.mjs';

test('the orbit cutaway follows just the two occupied lots and their own fixtures',()=>{
 const at=(key,x,z,source)=>({key,source,matrix:new T.Matrix4().makeTranslation(x,-6.1,z)});
 const placements=[at('building_6',30.25,40.4,'continuation_5'),at('lantern',29.8,40.7,'continuation_5'),
  at('building_1',37.7,26.25,'continuation_3'),at('awning_2600',37.7,26,'continuation_3'),
  at('building_6',53,26.25,'continuation_10'),at('cup',53,26.5,'continuation_10'),
  at('building_1',37.7,26.25,'court_5')];
 const hidden=streetOrbitCutaways(placements.toReversed());
 assert.deepEqual(placements.filter(p=>!hidden.has(p.source)).map(p=>p.key),['building_6','cup','building_1']);
});

test('street orbit changes the extrinsics and creates depth parallax around a fixed pivot',()=>{
 const camera=new T.PerspectiveCamera(38),target=new T.Vector3(.3,0,-2.7),angles={yaw:streetOpeningView.yaw,pitch:streetOpeningView.pitch};
 camera.position.set(28.5,-4.4,38.2);
 const position=camera.position.clone(),pivot=target.clone(),range=pivot.distanceTo(position);
 const orbit=createViewOrbit(camera,target,angles,()=>{});orbit.capture(-6.1);
 const openingEye=camera.position.clone(),foreground=openingEye.clone().lerp(pivot,.4),lens=camera.projectionMatrix.clone(),pose=camera.matrixWorldInverse.clone();
 const screen=p=>{const {x,y}=p.clone().project(camera);return new T.Vector2(x,y);};
 assert.ok(screen(foreground).length()<1e-10);
 orbit.drag(2000,2000,500);
 assert.deepEqual(angles,{yaw:8,pitch:4});assert.deepEqual(target,pivot);
 assert.ok(position.distanceTo(camera.position)>1);assert.ok(camera.position.y>position.y);
 assert.ok(Math.abs(camera.position.distanceTo(pivot)-range)<1e-10);
 assert.deepEqual(camera.projectionMatrix,lens);assert.notDeepEqual(camera.matrixWorldInverse,pose);
 assert.ok(screen(pivot).length()<1e-10);assert.ok(screen(foreground).length()>.1);
 orbit.turn(-100,-100);assert.equal(angles.yaw,-8);
 assert.ok(Math.abs(camera.position.y-(-6.1+.65))<1e-10,'the orbit stays above the pavement');
 const floor=angles.pitch;orbit.turn(1,1);assert.ok(angles.pitch>floor,'reversing from the floor responds immediately');
 orbit.reset();assert.deepEqual(camera.position,openingEye);assert.deepEqual(camera.matrixWorldInverse,pose);
});

test('the bedroom orbit clears the back partition and restores the authored window view',()=>{
 const camera=new T.PerspectiveCamera(62),eye=new T.Vector3(3.35,1.60,-.35),aim=new T.Vector3(1.95,1.05,2.50);
 const target=aim.clone(),angles={yaw:0,pitch:0};camera.position.copy(eye);camera.lookAt(target);
 const initialDirection=camera.getWorldDirection(new T.Vector3());
 const orbit=createViewOrbit(camera,target,angles,()=>{},bedroomOpeningView);orbit.capture(0,.60);
 const pivot=target.clone(),radius=eye.distanceTo(pivot);
 for(const yaw of [-8,8])for(const pitch of [-4,4]){
  orbit.turn(yaw-angles.yaw,pitch-angles.pitch);
  assert.deepEqual(angles,{yaw,pitch});assert.deepEqual(target,pivot);
  assert.ok(camera.position.z>-.54+.06 && camera.position.x<3.98-.06);
  assert.ok(Math.abs(camera.position.distanceTo(pivot)-radius)<1e-10);
 }
 orbit.reset();assert.deepEqual(camera.position,eye);
 assert.ok(camera.getWorldDirection(new T.Vector3()).distanceTo(initialDirection)<1e-10);
});

test('resize and renderer replacement reapply the angle once to the new framing',()=>{
 const angles={yaw:3,pitch:2},target=new T.Vector3(),camera=new T.PerspectiveCamera(38);
 camera.position.set(28,-4,38);
 const home=camera.position.clone(),orbit=createViewOrbit(camera,target,angles,()=>{});orbit.capture(-6.1);
 const wideEye=camera.position.clone();camera.position.copy(home);orbit.capture(-6.1);assert.deepEqual(camera.position,wideEye);
 camera.position.set(35,-4,49);target.set(1,1,-3);
 const newHome=camera.position.clone(),pivot=target.clone();orbit.capture(-6.1);const newEye=camera.position.clone();
 assert.ok(!newEye.equals(wideEye));
 camera.position.copy(newHome);const next=createViewOrbit(camera,target,angles,()=>{});next.capture(-6.1);
 assert.deepEqual(camera.position,newEye);next.reset();assert.deepEqual(angles,{yaw:streetOpeningView.yaw,pitch:streetOpeningView.pitch});assert.deepEqual(target,pivot);
});

test('the opening street lens is applied once across repeated size notifications; Bedroom opens at 100%',()=>{
 const camera=new T.PerspectiveCamera(38),views=new Map([['neighborhood',streetOpeningView.zoom]]);
 const zoom=createFixedViewZoom(camera,()=>{},{views,reduced:true});
 zoom.capture('neighborhood',38);zoom.capture('neighborhood',38);
 assert.equal(zoom.value,.8);assert.equal(camera.fov,zoomFov(38,.8));
 zoom.capture('bedroom',62);assert.equal(zoom.value,1);assert.equal(camera.fov,62);
});

test('zoom changes magnification without translating or turning the authored camera',()=>{
 const camera=new T.PerspectiveCamera(38,1.8,.02,1000),target=new T.Vector3(2,1,0);
 camera.position.set(28.5,-4.4,38.2);camera.lookAt(target);camera.updateMatrixWorld();
 const position=camera.position.clone(),rotation=camera.quaternion.clone(),zoom=createFixedViewZoom(camera,()=>{}, {reduced:true});
 zoom.capture('neighborhood');const point=new T.Vector3(1,2,0),before=point.clone().project(camera);
 zoom.set(2);const after=point.clone().project(camera);
 assert.ok(Math.abs(after.x/before.x-2)<1e-10);assert.ok(Math.abs(after.y/before.y-2)<1e-10);
 assert.deepEqual(camera.position.toArray(),position.toArray());assert.deepEqual(camera.quaternion.toArray(),rotation.toArray());
 zoom.set(100);assert.equal(zoom.value,zoomLimits.max);zoom.set(.01);assert.equal(zoom.value,zoomLimits.min);
 zoom.set(1);assert.ok(Math.abs(camera.fov-38)<1e-10);
});

test('per-scene zoom survives authored reframing and settles without continuous renders',()=>{
 const camera=new T.PerspectiveCamera(38),zoom=createFixedViewZoom(camera,()=>{});
 zoom.capture('neighborhood');zoom.set(2);
 for(let i=0;i<200;i++)zoom.update(1/60);
 assert.equal(zoom.value,2);assert.equal(zoom.update(1/60),false);
 camera.fov=62;zoom.capture('bedroom');assert.equal(zoom.value,1);assert.equal(camera.fov,62);
 camera.fov=48;zoom.capture('neighborhood');assert.equal(zoom.value,2);
 assert.ok(camera.fov<48);zoom.set(NaN);assert.equal(zoom.target,2);
});

test('wheel units normalize and trackpad deltas remain bounded',()=>{
 assert.equal(wheelZoomFactor(16,0,500),wheelZoomFactor(1,1,500));
 assert.equal(wheelZoomFactor(500,0,500),wheelZoomFactor(1,2,500));
 assert.ok(wheelZoomFactor(-100,0,500)>1);assert.ok(wheelZoomFactor(100,0,500)<1);
 assert.equal(wheelZoomFactor(1e8,0,500),wheelZoomFactor(240,0,500));
});

test('deferred bedroom loading can replace the renderer without losing neighborhood zoom',()=>{
 const views=new Map(),first=createFixedViewZoom(new T.PerspectiveCamera(38),()=>{},{views});
 first.capture('neighborhood');first.set(1.44);
 const replacement=createFixedViewZoom(new T.PerspectiveCamera(62),()=>{},{views});
 replacement.capture('bedroom');assert.equal(replacement.target,1);
 replacement.capture('neighborhood');assert.equal(replacement.target,1.44);
});
