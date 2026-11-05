import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import * as T from 'three';
import {DESK_OBJECTS,createDeskObjects,makeDetailRoot} from '../scripts/viewer/desk-inspection.mjs';

const audit=JSON.parse(await fs.readFile(new URL('../scripts/data/bedroom-workstation.json',import.meta.url),'utf8'));
function fixture(){
 const root=new T.Group(),texture=new T.DataTexture(new Uint8Array([140,160,180,255]),1,1),material=new T.MeshStandardMaterial({map:texture});material.name='authored_material';
 for(const object of audit.objects)for(const entry of object.parts){const part=new T.Group();part.userData={asset_role:'part',part_id:entry.id,linked_source:'workstation'};part.position.fromArray(entry.bounds.center);part.rotation.y=.12;
  const mesh=new T.Mesh(new T.BoxGeometry(...entry.bounds.size.map(n=>Math.max(n,.0001))),material);mesh.userData={asset_role:'mesh',mesh_id:'mesh_'+entry.id};part.add(mesh);root.add(part);
 }
 root.position.set(.2,0,.3);root.updateMatrixWorld(true);return {root,texture,material};
}
function meshMap(root){const result=new Map();root.traverse(n=>{if(n.isMesh)result.set(n.userData.mesh_id,n);});return result;}
function nearBox(actual,expected){for(const edge of ['min','max'])assert.ok(actual[edge].distanceTo(expected[edge])<.000002,edge+' bounds changed');}

test('raw proxies preserve room placement and exact object selection boundaries',()=>{
 const {root}=fixture(),before=new Map(root.children.map(part=>[part.userData.part_id,new T.Box3().setFromObject(part,true)])),offset=new T.Vector3(-2.05,1.55,1.58);
 const proxies=createDeskObjects(root,offset);
 assert.deepEqual(proxies.objects.map(o=>o.id),DESK_OBJECTS.map(o=>o.id));
 assert.deepEqual(proxies.objects.map(o=>o.parts.length),[3,107,7,6,3]);
 for(const object of proxies.objects)for(const part of object.parts){assert.ok(part.userData.part_id.startsWith(object.prefix));nearBox(new T.Box3().setFromObject(part,true),before.get(part.userData.part_id).clone().translate(offset));}
 assert.equal(root.children.length,0,'Fresh source root is fully consumed');
 assert.ok(proxies.objects.every(o=>o.pickMeshes.length===o.parts.length));
 proxies.dispose();proxies.dispose();assert.equal(proxies.root.children.length,0);
});

test('detail clones are independently owned and keyboard has four actual layers',()=>{
 const {root,material,texture}=fixture(),offset=new T.Vector3(-2.05,1.55,1.58),proxies=createDeskObjects(root,offset);
 for(const object of proxies.objects){
  const originals=new Map(object.pickMeshes.map(m=>[m.userData.mesh_id,m])),detail=makeDetailRoot(object),clones=meshMap(detail);
  assert.equal(clones.size,originals.size);
  assert.equal(detail.children.length,object.id==='keyboard'?4:object.parts.length);
  for(const [id,clone]of clones){const original=originals.get(id);assert.ok(original);assert.notEqual(clone.geometry,original.geometry);assert.notEqual(clone.material,material);assert.notEqual(clone.material.map,texture);assert.equal(clone.material.name,material.name);nearBox(new T.Box3().setFromObject(clone,true),new T.Box3().setFromObject(original,true).translate(offset.clone().negate()));}
  if(object.id==='keyboard'){const keys=detail.children.find(p=>p.userData.part_id==='workstation_keyboard_keys');assert.equal(keys.userData.source_part_ids.length,104);assert.equal(keys.children.length,104);assert.equal(keys.userData.explode_offset[1],.1);}
  const whole=new T.Box3().setFromObject(detail,true),gap=Math.max(.002,whole.getSize(new T.Vector3()).length()*.025),boxes=[];
  for(const part of detail.children){assert.ok(new T.Vector3(...part.userData.explode_offset).length()<.5);const box=new T.Box3().setFromObject(part,true).translate(new T.Vector3(...part.userData.explode_offset)).expandByScalar(gap*.49);assert.ok(boxes.every(previous=>!box.intersectsBox(previous)),'Exploded components overlap: '+part.userData.part_id);boxes.push(box);}
  const clone=clones.values().next().value,original=originals.get(clone.userData.mesh_id),before=original.geometry.attributes.position.getX(0);clone.geometry.attributes.position.setX(0,999);assert.equal(original.geometry.attributes.position.getX(0),before);
 }
 let disposed=0,textureDisposed=0;material.addEventListener('dispose',()=>disposed++);texture.addEventListener('dispose',()=>textureDisposed++);proxies.dispose();proxies.dispose();assert.equal(disposed,1,'Transferred proxy material is disposed exactly once');assert.equal(textureDisposed,1,'Shared transferred texture is disposed exactly once');
});

test('unused bedroom-only resources are released immediately, selected shared resources survive',()=>{
 const {root,material,texture}=fixture();let sharedMaterial=0,sharedTexture=0,unusedMaterial=0,unusedGeometry=0,unusedTexture=0;
 material.addEventListener('dispose',()=>sharedMaterial++);texture.addEventListener('dispose',()=>sharedTexture++);
 const map=new T.DataTexture(new Uint8Array([100,100,100,255]),1,1),mat=new T.MeshStandardMaterial({map}),geometry=new T.BoxGeometry(1,1,1),part=new T.Group();part.userData.part_id='bed_unselected';part.add(new T.Mesh(geometry,mat));root.add(part);
 mat.addEventListener('dispose',()=>unusedMaterial++);geometry.addEventListener('dispose',()=>unusedGeometry++);map.addEventListener('dispose',()=>unusedTexture++);
 const proxies=createDeskObjects(root,new T.Vector3());assert.equal(root.children.length,0);assert.deepEqual([unusedMaterial,unusedGeometry,unusedTexture],[1,1,1]);assert.deepEqual([sharedMaterial,sharedTexture],[0,0]);
 proxies.dispose();assert.deepEqual([sharedMaterial,sharedTexture],[1,1]);assert.deepEqual([unusedMaterial,unusedGeometry,unusedTexture],[1,1,1]);
});

