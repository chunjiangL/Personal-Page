import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {geometryCodecReady,decodeGeometryArray} from '../scripts/viewer/geometry-codec.mjs';
import {isRemovedVehicleMesh} from '../scripts/viewer/vehicle-fleet.mjs';

await geometryCodecReady;
const special=new Uint32Array([0,0x80000000,0x7fc01234,0x3f800000,0xbf800000,0x7f800000]);
const bytes=value=>new Uint8Array(value.buffer,value.byteOffset,value.byteLength);
const same=(actual,expected)=>assert.deepEqual(bytes(actual),bytes(expected));
const packed=Buffer.from('oAAAATAAAAD/ATAAAAB+AAABMAAAAP8BMAAAAH4BMAAAAGcBMAAAACMBMAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDQSwH8=','base64');

test('raw and NONE meshopt retain signed zero, infinities, and NaN payload bits',()=>{
 const raw=new Uint8Array(special.byteLength+3);raw.set(bytes(special),3);
 same(decodeGeometryArray(raw,{encoding:'raw',byteOffset:3,length:6,encodedLength:24}),special);
 same(decodeGeometryArray(packed,{encoding:'meshopt',byteOffset:0,encodedLength:packed.length,length:6,byteStride:12}),special);
});

test('triangle records are reconstructed three times with identical bits',()=>{
 const expected=new Uint32Array(18);
 for(let triangle=0;triangle<2;triangle++)for(let vertex=0;vertex<3;vertex++)expected.set(special.subarray(triangle*3,triangle*3+3),triangle*9+vertex*3);
 same(decodeGeometryArray(bytes(special),{encoding:'triangle-raw',byteOffset:0,encodedLength:24,length:18}),expected);
 same(decodeGeometryArray(packed,{encoding:'triangle-meshopt',byteOffset:0,encodedLength:packed.length,length:18,byteStride:12}),expected);
});

test('all dictionary index widths retain exact float bits',()=>{
 const order=[2,0,3,2,1,5,4,5],expected=new Uint32Array(order.map(i=>special[i]));
 for(const width of [1,2,4]){
  const storage=new Uint8Array(special.byteLength+order.length*width),data=new DataView(storage.buffer);storage.set(bytes(special));
  for(let i=0;i<order.length;i++){const at=special.byteLength+i*width;if(width===1)data.setUint8(at,order[i]);else if(width===2)data.setUint16(at,order[i],true);else data.setUint32(at,order[i],true);}
  same(decodeGeometryArray(storage,{encoding:'dictionary',dictionaryCount:6,indexBytes:width,byteOffset:0,encodedLength:storage.length,length:order.length}),expected);
 }
});

test('malformed views and dictionary indices fail instead of silently changing geometry',()=>{
 assert.throws(()=>decodeGeometryArray(new Uint8Array(4),{encoding:'raw',byteOffset:1,length:1}),/exceeds chunk/);
 assert.throws(()=>decodeGeometryArray(new Uint8Array(4),{encoding:'raw',byteOffset:0,length:2,encodedLength:4}),/byte length/);
 assert.throws(()=>decodeGeometryArray(new Uint8Array(4),{encoding:'lossy',byteOffset:0,length:1}),/Unsupported/);
 assert.throws(()=>decodeGeometryArray(new Uint8Array(4),{encoding:'triangle-raw',byteOffset:0,length:1}),/triangle|Triangle/);
 const bad=new Uint8Array([0,0,0,0,1]);assert.throws(()=>decodeGeometryArray(bad,{encoding:'dictionary',dictionaryCount:1,indexBytes:1,byteOffset:0,encodedLength:5,length:1}),/out of bounds/);
});

test('every compact cache array equals its original, with fleet-safe key filtering and verified chunk hashes',async()=>{
 const base=new URL('../assets/models/sketch-runtime/',import.meta.url),original=JSON.parse(await fs.readFile(new URL('prepared/manifest.json',base),'utf8')),compact=JSON.parse(await fs.readFile(new URL('prepared-compact/manifest.json',base),'utf8'));
 assert.equal(compact.storage,'lossless-compact-v1');
 const expectedMeshes=Object.fromEntries(Object.entries(original.meshes).filter(([id])=>!isRemovedVehicleMesh(id)));
 assert.deepEqual(compact.meshes,expectedMeshes);assert.deepEqual(new Set(Object.keys(compact.entries)),new Set(Object.values(expectedMeshes)));
 const originalCache=new Map(),compactCache=new Map(),chunkRecords=new Map(compact.chunks.map(c=>[c.file,c])),verifiedChunks=new Set();
 async function read(file,cache,limit){
  let value=cache.get(file);if(value){cache.delete(file);cache.set(file,value);return value;}
  const packed=await fs.readFile(new URL(file,base)),record=chunkRecords.get(file);
  if(record){assert.equal(packed.length,record.bytes);assert.equal(createHash('sha256').update(packed).digest('hex'),record.sha256);verifiedChunks.add(file);}
  value=gunzipSync(packed);if(record)assert.equal(value.length,record.inflatedBytes);
  cache.set(file,value);if(cache.size>limit)cache.delete(cache.keys().next().value);return value;
 }
 let arrays=0;
 for(const [key,entry]of Object.entries(compact.entries)){
  const sourceEntry=original.entries[key];assert.ok(sourceEntry);assert.deepEqual(entry.userData,sourceEntry.userData);assert.equal(entry.vertexCount,sourceEntry.vertexCount);
  for(const [name,view]of [...Object.entries(entry.attributes),['field',entry.field]]){
   const before=name==='field'?sourceEntry.field:sourceEntry.attributes[name],source=await read(before.chunk||sourceEntry.chunk,originalCache,3),input=await read(view.chunk,compactCache,3);
   assert.equal(view.length,before.length);assert.equal(view.itemSize,before.itemSize);
   const decoded=decodeGeometryArray(input,view),expected=source.subarray(before.byteOffset,before.byteOffset+before.length*4);
   assert.ok(expected.equals(bytes(decoded)),'Changed Float32 bits: '+key+' '+name);arrays++;
  }
 }
 assert.equal(arrays,Object.keys(compact.entries).length*5);assert.equal(verifiedChunks.size,compact.chunks.length);
});
