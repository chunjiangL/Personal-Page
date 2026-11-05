import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {SHOWCASE_VEHICLES,REMOVED_VEHICLE_IDS,isRemovedVehicleMesh,adaptVehicleFleetSource} from '../scripts/viewer/vehicle-fleet.mjs';

const game=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const entry=path.join(game,'src/assets/scenes/apartment-street-life.ts');
const exists=await fs.access(entry).then(()=>true,()=>false);
function geometryHash(geometry){const hash=createHash('sha256');for(const [name,a]of Object.entries(geometry.attributes).sort(([a],[b])=>a.localeCompare(b))){hash.update(name+':'+a.itemSize+':'+a.normalized);hash.update(new Uint8Array(a.array.buffer,a.array.byteOffset,a.array.byteLength));}if(geometry.index)hash.update(new Uint8Array(geometry.index.array.buffer,geometry.index.array.byteOffset,geometry.index.array.byteLength));return hash.digest('hex');}
function record(scene){const parts={},materials={},totals={parts:scene.partIds.length,meshes:0,triangles:0};scene.root.updateMatrixWorld(true);for(const part of scene.root.children){parts[part.userData.part_id]={owner:part.userData.street_vehicle,meshes:{}};for(const mesh of part.children){totals.meshes++;totals.triangles+=(mesh.geometry.index?.count||mesh.geometry.attributes.position.count)/3;parts[part.userData.part_id].meshes[mesh.userData.mesh_id]=geometryHash(mesh.geometry);for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material])materials[material.name]={color:material.color.getHexString(),roughness:material.roughness,metalness:material.metalness,opacity:material.opacity,transparent:material.transparent,side:material.side};}}return{parts,materials,totals,snapshot:scene.snapshot()};}
function dispose(scene){const geometries=new Set(),materials=new Set();scene.root.traverse(n=>{if(n.isMesh){geometries.add(n.geometry);for(const m of Array.isArray(n.material)?n.material:[n.material])materials.add(m);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());scene.root.clear();}
async function factory(adapted){const built=await build({entryPoints:[entry],bundle:true,write:false,platform:'node',format:'esm',target:'es2022',plugins:[{name:'test-fleet',setup(b){if(adapted)b.onLoad({filter:/apartment-street-life\.ts$/},async args=>({contents:adaptVehicleFleetSource(await fs.readFile(args.path,'utf8')),loader:'ts'}));}}]});return(await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].contents).toString('base64'))).createApartmentStreetLife;}

test('removed mesh classification does not remove bus stops or accepted wheels',()=>{
 for(const id of REMOVED_VEHICLE_IDS)for(const suffix of ['', '_0','_wheel_3_tire'])assert.equal(isRemovedVehicleMesh(id+suffix),true);
 for(const id of ['street_life_bus_stop_0','street_life_bus_door_0_1','street_life_car_mustard_wheel_0_tire','street_life_vehicle_pickup_0'])assert.equal(isRemovedVehicleMesh(id),false);
});

test('real authored fleet is reduced before construction, with exact retained geometry and traffic', {skip:!exists},async()=>{
 const source=await fs.readFile(entry,'utf8'),adapted=adaptVehicleFleetSource(source);
 assert.equal(adapted.slice(adapted.indexOf(' function pose(){')),source.slice(source.indexOf(' function pose(){')),'Original pose/simulation/signal/stop code must remain byte-identical');
 assert.throws(()=>adaptVehicleFleetSource(adapted),/Original vehicle source changed/);
 let scene=(await factory(false))(),before=record(scene);dispose(scene);scene=undefined;
 const started=performance.now();scene=(await factory(true))();const constructionMS=Math.round(performance.now()-started),after=record(scene);
 assert.deepEqual(after.snapshot.vehicles.map(v=>v.id),SHOWCASE_VEHICLES.map(v=>v.id));
 assert.equal(before.snapshot.vehicles.length,7);assert.equal(after.snapshot.vehicles.length,3);
 for(const [id,part]of Object.entries(after.parts)){assert.ok(!isRemovedVehicleMesh(id));assert.deepEqual(part,before.parts[id],'Retained authored meshes changed: '+id);}
 for(const [name,material]of Object.entries(after.materials)){const original=before.materials[name];assert.ok(original);assert.deepEqual(material,name.endsWith('_vehicle_pickup_clay')?{...original,color:'739c88'}:original,'Unexpected material change: '+name);}
 assert.equal(after.materials.mat_metal_apartment_street_life_bus_coral.color,'df725a');assert.equal(after.materials.mat_metal_apartment_street_life_car_mustard.color,'ebbd47');
 let busStopped=false;for(let step=0;step<600;step++){scene.update(.25);const snapshot=scene.snapshot();assert.equal(snapshot.vehicles.length,3);busStopped||=snapshot.vehicles.some(v=>v.id==='street_life_bus'&&v.dwell>0);for(const vehicle of snapshot.vehicles)assert.ok(vehicle.position.every(Number.isFinite)&&vehicle.speed>=0);}
 assert.equal(busStopped,true,'Original bus dwell must still run');
 console.log(JSON.stringify({baseline:before.totals,reduced:after.totals,removed:{parts:before.totals.parts-after.totals.parts,meshes:before.totals.meshes-after.totals.meshes,triangles:before.totals.triangles-after.totals.triangles},constructionWithBundleMS:constructionMS}));dispose(scene);
});
