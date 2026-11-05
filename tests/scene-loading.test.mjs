import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
import {adaptSceneLoaderSource,createSceneAuditLoader} from '../scripts/viewer/scene-loading.mjs';

const game=process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const arrayHash=attribute=>attribute?hash(Buffer.from(attribute.array.buffer,attribute.array.byteOffset,attribute.array.byteLength)):null;

test('scene adapter retains the entire original full loader and copies its authored render tail verbatim',async()=>{
 const source=await fs.readFile(game+'/src/apps/apartment/load-scene.ts','utf8'),adapted=adaptSceneLoaderSource(source),branch="\n  if(getSceneLoadMode()==='neighborhood')return loadShowcaseNeighborhood(progress);";
 assert.ok(adapted.replace("import {getSceneLoadMode} from '@showcase-static';\n",'').replace(branch,'').startsWith(source));
 const start=source.indexOf('  const building=createApartmentStreetScene();'),end=source.indexOf('  return {geometry,settings,building,streetProps,homeBounds,homePartIds,inherited:',start),tail=source.slice(start,end);
 assert.equal(adapted.split(tail).length,3);assert.throws(()=>adaptSceneLoaderSource(source.replace('  const building=createApartmentStreetScene();','  // changed factory')),/structure changed/);
});

test('neighborhood geometry, transforms and resolved treatments equal the original full exterior without home requests',async()=>{
 const audit=await createSceneAuditLoader();
 try{
  async function capture(loaded,partIds){
   loaded.geometry.root.updateMatrixWorld(true);const meshes={},names=new Set();
   for(const [id,record]of loaded.geometry.meshes){if(partIds&&!partIds.has(record.partId))continue;const node=record.node,materials=Array.isArray(node.material)?node.material:[node.material];
    meshes[id]={key:await audit.geometryFingerprint(node.geometry),part:record.partId,matrix:[...node.matrixWorld.elements],instance:arrayHash(node.instanceMatrix),instanceColor:arrayHash(node.instanceColor),count:node.isInstancedMesh?node.count:null,castShadow:node.castShadow,receiveShadow:node.receiveShadow,materials:materials.map((material,slot)=>{names.add(material.name);return{name:material.name,color:material.color?.getHexString(),roughness:material.roughness,metalness:material.metalness,opacity:material.opacity,transparent:material.transparent,side:material.side,style:audit.resolveAppearance(loaded.settings,id,slot,material.name,loaded.inherited[material.name],loaded.appearance[id]?.[String(slot)])};})};
   }
   const settings=structuredClone(loaded.settings);settings.appearance.materials=Object.fromEntries(Object.entries(settings.appearance.materials).filter(([name])=>names.has(name)));return{meshes,settings};
  }
  const full=(await audit.load('full')).loaded,homeIds=new Set(full.homePartIds),cityIds=new Set(full.geometry.root.children.map(part=>part.userData.part_id).filter(id=>!homeIds.has(id))),original=await capture(full,cityIds);
  const {loaded,requests}=await audit.load('neighborhood'),actual=await capture(loaded);
  assert.deepEqual(Object.keys(actual.meshes),Object.keys(original.meshes));
  for(const id of Object.keys(actual.meshes))assert.ok(isDeepStrictEqual(actual.meshes[id],original.meshes[id]),'Original exterior changed: '+id);
  assert.ok(isDeepStrictEqual(actual.settings,original.settings),'Original exterior settings changed');
  assert.equal(requests.filter(request=>request.type==='api'||request.path?.startsWith('assemblies/')).length,0);assert.equal(requests.filter(request=>request.type==='file').length,29);
  assert.equal(loaded.homePartIds.length,0);assert.ok(loaded.homeBounds.isEmpty());assert.equal(loaded.doorPartId,undefined);assert.equal(loaded.standingObstacles.length,0);
  const keys=JSON.parse(await fs.readFile(new URL('../scripts/data/neighborhood-source-keys.json',import.meta.url),'utf8'));assert.deepEqual(Object.fromEntries(Object.entries(actual.meshes).map(([id,row])=>[id,row.key])),keys.meshes);
  assert.equal(hash(await fs.readFile(game+'/src/apps/apartment/load-scene.ts')),keys.sourceHashes.loader);assert.equal(hash(await fs.readFile(new URL('../scripts/viewer/scene-loading.mjs',import.meta.url))),keys.sourceHashes.adapter);
 }finally{await audit.dispose();}
});
