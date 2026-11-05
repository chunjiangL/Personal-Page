import test from 'node:test';
import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
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
