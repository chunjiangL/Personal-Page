import test from 'node:test';
import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import * as T from 'three';
import {contourKey,loadContourCache,preparedEdges,contourCacheStats} from '../scripts/viewer/contour-cache.mjs';

const bytes=array=>Buffer.from(array.buffer,array.byteOffset,array.byteLength);
const hash=data=>createHash('sha256').update(data).digest('hex');
function transport(fixtures,revision=T.REVISION){
 const chunks=[],entries={};let length=0;
 for(const {geometry,angle,key}of fixtures){const expected=new T.EdgesGeometry(geometry,angle),array=expected.attributes.position.array;entries[contourKey(key,angle)]={chunk:'contours/edges.bin.gz',byteOffset:length,length:array.length};chunks.push(bytes(array));length+=array.byteLength;expected.dispose();}
 const raw=Buffer.concat(chunks),compressed=gzipSync(raw),manifest={schema:'sketch.contours.v1',threeRevision:revision,entries,chunks:[{file:'contours/edges.bin.gz',bytes:compressed.length,inflatedBytes:raw.length,sha256:hash(compressed)}]};
 return {manifest,files:new Map([['/contours/manifest.json.gz',gzipSync(Buffer.from(JSON.stringify(manifest)))],['/contours/edges.bin.gz',compressed]])};
}
function mockTransfer(t,files){t.mock.method(globalThis,'fetch',async url=>{const value=files.get(new URL(url).pathname);return value?new Response(value):new Response('missing',{status:404});});}

test('cached positions exactly match original indexed and expanded EdgesGeometry, independently owned',async t=>{
 const box=new T.BoxGeometry(.13,.27,.41,2,2,2),sphere=new T.SphereGeometry(.25,12,8),fixtures=[];
 box.translate(.005,.02,-.003);sphere.rotateY(.17);
 for(const [i,geometry]of [box,sphere].entries())for(const angle of [1,35,60])fixtures.push({geometry,angle,key:'source-'+i});
 const {files}=transport(fixtures);mockTransfer(t,files);const cache=await loadContourCache('https://cache.test/');
 for(const fixture of fixtures){const {geometry,angle,key}=fixture;geometry.userData.showcaseSourceKey=key;
  const before=bytes(geometry.attributes.position.array).slice(),expected=new T.EdgesGeometry(geometry,angle),first=preparedEdges(geometry,angle),expanded=geometry.toNonIndexed();expanded.userData.showcaseSourceKey=key;const second=preparedEdges(expanded,angle);
  assert.ok(first instanceof T.EdgesGeometry);assert.equal(first.parameters.geometry,geometry);assert.equal(first.parameters.thresholdAngle,angle);assert.deepEqual(Object.keys(first.attributes),Object.keys(expected.attributes));assert.ok(bytes(first.attributes.position.array).equals(bytes(expected.attributes.position.array)));assert.ok(bytes(second.attributes.position.array).equals(bytes(expected.attributes.position.array)));assert.ok(bytes(geometry.attributes.position.array).equals(before));
  if(first.attributes.position.array.length){first.attributes.position.array[0]=12345;assert.ok(bytes(second.attributes.position.array).equals(bytes(expected.attributes.position.array)));}
  first.dispose();second.dispose();expected.dispose();expanded.dispose();
 }
 assert.equal(contourCacheStats().hits,12);assert.equal(contourCacheStats().misses,0);cache.dispose();box.dispose();sphere.dispose();
});

test('new source geometry or threshold uses the unchanged original algorithm',async t=>{
 const geometry=new T.CylinderGeometry(.2,.3,.5,8),{files}=transport([{geometry,angle:35,key:'known'}]);mockTransfer(t,files);const cache=await loadContourCache('https://cache.test/');
 for(const [key,angle]of [['unknown',35],['known',47]]){geometry.userData.showcaseSourceKey=key;const actual=preparedEdges(geometry,angle),expected=new T.EdgesGeometry(geometry,angle);assert.ok(bytes(actual.attributes.position.array).equals(bytes(expected.attributes.position.array)));actual.dispose();expected.dispose();}
 assert.equal(contourCacheStats().misses,2);cache.dispose();geometry.dispose();
});

test('compressed content checksum and Three revision prevent stale or damaged cache activation',async t=>{
 const geometry=new T.BoxGeometry(1,1,1),fixture={geometry,angle:35,key:'box'};
 const mismatch=transport([fixture],'different-revision');mockTransfer(t,mismatch.files);await assert.rejects(loadContourCache('https://cache.test/'),/matching original Three/);
 const damaged=transport([fixture]);damaged.manifest.chunks[0].sha256='0'.repeat(64);damaged.files.set('/contours/manifest.json.gz',gzipSync(Buffer.from(JSON.stringify(damaged.manifest))));t.mock.restoreAll();mockTransfer(t,damaged.files);await assert.rejects(loadContourCache('https://cache.test/'),/checksum mismatch/);geometry.dispose();
});

test('neighborhood mode requests only its manifest and full mode remains the default',async t=>{
 const geometry=new T.BoxGeometry(1,1,1),fixture={geometry,angle:35,key:'box'},full=transport([fixture]),neighborhood=transport([fixture]);
 neighborhood.manifest.partition={mode:'neighborhood'};
 full.files.set('/contours/neighborhood-manifest.json.gz',gzipSync(Buffer.from(JSON.stringify(neighborhood.manifest))));
 const requests=[];t.mock.method(globalThis,'fetch',async url=>{const pathname=new URL(url).pathname;requests.push(pathname);const value=full.files.get(pathname);return value?new Response(value):new Response('missing',{status:404});});
 const first=await loadContourCache('https://cache.test/',()=>{},'neighborhood');assert.equal(first.manifest.partition.mode,'neighborhood');assert.ok(requests.includes('/contours/neighborhood-manifest.json.gz'));assert.ok(!requests.includes('/contours/manifest.json.gz'));
 requests.length=0;const second=await loadContourCache('https://cache.test/');assert.ok(requests.includes('/contours/manifest.json.gz'));assert.ok(!requests.includes('/contours/neighborhood-manifest.json.gz'));first.dispose();geometry.userData.showcaseSourceKey='box';preparedEdges(geometry,35).dispose();assert.equal(contourCacheStats().hits,1);second.dispose();geometry.dispose();
});

test('published contour partitions share exact city entries and never include a home-only stream',async()=>{
 const base=new URL('../assets/models/sketch-runtime/',import.meta.url),read=name=>fs.readFile(new URL('contours/'+name+'.json',base),'utf8').then(JSON.parse);
 const full=await read('manifest'),alias=await read('full-manifest'),neighborhood=await read('neighborhood-manifest'),keyBytes=await fs.readFile(new URL('../scripts/data/neighborhood-source-keys.json',import.meta.url)),keys=JSON.parse(keyBytes),sourceKeys=new Set(Object.values(keys.meshes));
 assert.deepEqual(alias,full);assert.equal(neighborhood.partition.sourceKeyManifestSHA256,hash(keyBytes));assert.equal(full.partition.sourceKeyManifestSHA256,hash(keyBytes));
 const cityEntries=Object.fromEntries(Object.entries(full.entries).filter(([,entry])=>sourceKeys.has(entry.sourceKey)));assert.deepEqual(neighborhood.entries,cityEntries);
 assert.deepEqual(new Set(Object.keys(neighborhood.meshes)),new Set(Object.keys(keys.meshes)));
 for(const [id,key]of Object.entries(keys.meshes))assert.equal(neighborhood.entries[neighborhood.meshes[id]].sourceKey,key,id);
 const cityFiles=new Set(Object.values(neighborhood.entries).map(entry=>entry.chunk));assert.deepEqual(new Set(neighborhood.chunks.map(item=>item.file)),cityFiles);
 for(const entry of Object.values(full.entries))assert.equal(cityFiles.has(entry.chunk),sourceKeys.has(entry.sourceKey));
 const rawChunks=new Map();for(const item of full.chunks){const bytes=await fs.readFile(new URL(item.file,base));assert.equal(hash(bytes),item.sha256,item.file);const raw=gunzipSync(bytes);assert.equal(raw.length,item.inflatedBytes,item.file);rawChunks.set(item.file,raw);}
 for(const [key,entry]of Object.entries(full.entries)){assert.equal(entry.byteOffset%4,0,key);assert.equal(entry.length%6,0,key);assert.ok(entry.byteOffset+entry.length*4<=rawChunks.get(entry.chunk).length,key);}
});
