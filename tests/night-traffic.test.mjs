import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import * as T from 'three';
import {applyNightTraffic} from '../scripts/viewer/night-traffic.mjs';
import {adaptVehicleFleetSource,SHOWCASE_VEHICLES} from '../scripts/viewer/vehicle-fleet.mjs';

function fixture(paused=false){
 const parts=new Map();for(const [id,visible]of [['bus',true],['wheel',false],['door',true],['signal',true]]){const part=new T.Group();part.visible=visible;part.userData=id==='signal'?{}:{street_vehicle:'bus'};parts.set(id,part);}
 let contourSyncs=0,glassSyncs=0;
 const stage={weather:'sunny',presentation:'exterior',trafficPaused:paused,loaded:{geometry:{parts}},renderer:{shadowMap:{needsUpdate:false}},camera:new T.PerspectiveCamera(),core:{contours:{sync(){contourSyncs++;}},glassIllustration:{sync(){glassSyncs++;}}},dirty:false};
 return{stage,parts,syncs:()=>({contourSyncs,glassSyncs})};
}

test('Night hides every tagged part and pauses traffic; daylight preserves preexisting visibility and pause',()=>{
 for(const paused of [false,true]){
  const {stage,parts,syncs}=fixture(paused),descriptors=new Map([...parts].map(([id,part])=>[id,Object.getOwnPropertyDescriptor(part,'visible')]));
  assert.equal(applyNightTraffic(stage),false);assert.equal(stage.trafficPaused,paused);assert.deepEqual(syncs(),{contourSyncs:0,glassSyncs:0});
  stage.weather='night';assert.equal(applyNightTraffic(stage),true);assert.equal(stage.trafficPaused,true);for(const [id,part]of parts)assert.equal(part.visible,id==='signal');assert.equal(stage.dirty,true);assert.equal(stage.renderer.shadowMap.needsUpdate,true);assert.deepEqual(syncs(),{contourSyncs:1,glassSyncs:1});
  stage.dirty=false;stage.renderer.shadowMap.needsUpdate=false;for(let frame=0;frame<60;frame++)applyNightTraffic(stage);assert.deepEqual(syncs(),{contourSyncs:1,glassSyncs:1});assert.equal(stage.dirty,false);assert.equal(stage.renderer.shadowMap.needsUpdate,false);
  stage.weather='sunset';assert.equal(applyNightTraffic(stage),false);assert.equal(stage.trafficPaused,paused);for(const [id,part]of parts)assert.deepEqual(Object.getOwnPropertyDescriptor(part,'visible'),descriptors.get(id));assert.deepEqual(syncs(),{contourSyncs:2,glassSyncs:2});
 }
});

test('Night survives authored focus/refresh writes and dawn restores the current Bedroom visibility',()=>{
 const {stage,parts}=fixture();stage.weather='night';applyNightTraffic(stage);
 // The original non-seated room presentation hides street parts; seated mode
 // may subsequently expose selected street parts through the real window.
 stage.presentation='home';for(const [id,part]of parts)if(id!=='signal')part.visible=false;
 parts.get('door').visible=true;applyNightTraffic(stage);assert.equal(stage.trafficPaused,true);assert.equal(parts.get('door').visible,false);assert.equal(parts.get('bus').visible,false);
 stage.weather='rain';applyNightTraffic(stage);assert.equal(parts.get('door').visible,true);assert.equal(parts.get('bus').visible,false);assert.equal(parts.get('wheel').visible,false);assert.equal(parts.get('signal').visible,true);assert.equal(stage.trafficPaused,false);
 // A newly initialized Stage keeps independent state, including reduced motion.
 const other=fixture(true);other.stage.weather='night';applyNightTraffic(other.stage);other.stage.weather='overcast';applyNightTraffic(other.stage);assert.equal(other.stage.trafficPaused,true);
});

test('actual accepted fleet includes all wheels and bus doors, leaves no contour ghosts, and resumes original simulation',async()=>{
 const game=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
 const built=await build({stdin:{contents:`export * as T from 'three';export {createApartmentStreetLife} from './src/assets/scenes/apartment-street-life';export {ContourStage} from './src/rendering/asset/contours';export {cloneDefaults} from './src/rendering/asset/settings';`,resolveDir:game},bundle:true,write:false,platform:'node',format:'esm',target:'es2022',plugins:[{name:'night-accepted-fleet',setup(b){b.onLoad({filter:/apartment-street-life\.ts$/},async args=>({contents:adaptVehicleFleetSource(await fs.readFile(args.path,'utf8')),loader:'ts'}));}}]});
 const runtime=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].contents).toString('base64')),street=runtime.createApartmentStreetLife(),parts=new Map(street.root.children.map(part=>[part.userData.part_id,part])),vehicles=[...parts.values()].filter(part=>part.userData.street_vehicle),meshes=new Map();
 assert.deepEqual(street.vehicles.map(vehicle=>vehicle.id),SHOWCASE_VEHICLES.map(vehicle=>vehicle.id));assert.equal(vehicles.length,19);assert.equal(vehicles.filter(part=>part.userData.bus_door).length,4);assert.equal(vehicles.filter(part=>part.userData.wheel_radius).length,12);
 for(const part of vehicles)for(const node of part.children)meshes.set(node.userData.mesh_id,{id:node.userData.mesh_id,partId:part.userData.part_id,node});
 const scene=new runtime.T.Scene(),contours=new runtime.ContourStage({meshes},scene),camera=new runtime.T.PerspectiveCamera(38,1,.1,200);camera.position.set(10,10,10);camera.lookAt(0,0,0);camera.updateMatrixWorld();contours.setViewport(900,700);contours.apply(runtime.cloneDefaults());
 const stage={weather:'night',trafficPaused:false,loaded:{geometry:{parts}},renderer:{shadowMap:{}},core:{contours},camera};
 const original=street.snapshot();applyNightTraffic(stage);assert.ok(vehicles.every(part=>!part.visible));assert.ok([...contours.lines.values(),...contours.hulls.values(),...contours.marked.values()].every(node=>!node.visible),'Detached outlines must also disappear');
 for(let frame=0;frame<60;frame++){applyNightTraffic(stage);if(!stage.trafficPaused)street.update(1/60);}assert.deepEqual(street.snapshot(),original);
 // Visibility refresh cannot expose body, door or wheels during Night.
 for(const part of vehicles)part.visible=true;assert.ok(vehicles.every(part=>!part.visible));applyNightTraffic(stage);
 stage.weather='sunset';applyNightTraffic(stage);assert.ok(vehicles.every(part=>part.visible));assert.equal(stage.trafficPaused,false);street.update(.5);assert.ok(street.snapshot().time>original.time);assert.ok([...contours.lines.values()].some(line=>line.visible));
 contours.dispose();const geometries=new Set(),materials=new Set();street.root.traverse(node=>{if(node.isMesh){geometries.add(node.geometry);for(const material of Array.isArray(node.material)?node.material:[node.material])materials.add(material);}});for(const geometry of geometries)geometry.dispose();for(const material of materials)material.dispose();
});
