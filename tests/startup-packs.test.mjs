import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {buildStartupPacks,validateStartupAssetPath} from '../scripts/pack-sketch-startup.mjs';

const base=new URL('../assets/models/sketch-runtime/',import.meta.url),hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const read=relative=>fs.readFile(new URL(relative,base));
const json=async relative=>JSON.parse(await read(relative));

test('all 44 startup members retain their exact compressed and decoded bytes with complete contiguous offsets',async()=>{
 const index=await json('startup-packs/index.json'),main=await json('manifest.json'),geometry=await json('prepared-compact/neighborhood-manifest.json'),contours=await json('contours/neighborhood-manifest.json');
 const expected=['manifest.json.gz',...Object.entries(main.transport).filter(([file])=>file.startsWith('files/models/')).map(([,entry])=>entry.gzip),'prepared-compact/neighborhood-manifest.json.gz',...geometry.chunks.map(chunk=>chunk.file),'contours/neighborhood-manifest.json.gz',...contours.chunks.map(chunk=>chunk.file)];
 assert.equal(index.schema,'sketch.startup-packs.v1');assert.equal(index.format,'concatenated-gzip-members');assert.equal(index.scene,'neighborhood');assert.equal(expected.length,44);assert.equal(index.memberCount,44);assert.deepEqual(Object.keys(index.members).sort(),expected.sort());assert.equal(index.packs.length,3);
 const packed=new Map();let total=0;for(const pack of index.packs){validateStartupAssetPath(pack.file);const bytes=await read(pack.file);assert.equal(bytes.length,pack.bytes);assert.equal(hash(bytes),pack.sha256);assert.ok(pack.file.includes(pack.sha256));assert.ok(pack.bytes<=20_000_000);packed.set(pack.file,bytes);total+=bytes.length;
  let offset=0;for(const entry of Object.values(index.members).filter(member=>member.pack===pack.file).sort((a,b)=>a.offset-b.offset)){assert.equal(entry.offset,offset);assert.ok(Number.isSafeInteger(entry.length)&&entry.length>0);offset+=entry.length;}assert.equal(offset,bytes.length);
 }
 assert.equal(index.totalBytes,total);assert.ok(Math.max(...index.packs.map(p=>p.bytes))-Math.min(...index.packs.map(p=>p.bytes))<100_000,'Downloads remain balanced');
 for(const [relative,member]of Object.entries(index.members)){
  validateStartupAssetPath(relative);const pack=packed.get(member.pack);assert.ok(pack,relative);const bytes=pack.subarray(member.offset,member.offset+member.length),original=await read(relative);assert.ok(bytes.equals(original),relative);assert.equal(hash(bytes),member.sha256,relative);
  const decoded=gunzipSync(bytes),originalDecoded=gunzipSync(original);assert.ok(decoded.equals(originalDecoded),relative);
  if(relative.endsWith('.glb.gz')||relative.endsWith('.json.gz'))assert.ok(decoded.equals(await read(relative.slice(0,-3))),relative);
 }
 for(const entry of [...Object.values(main.transport).filter(entry=>index.members[entry.gzip]).map(entry=>({...entry,file:entry.gzip})),...geometry.chunks,...contours.chunks])assert.equal(index.members[entry.file].sha256,entry.sha256,entry.file);
});

test('rebuilding from the current manifests is deterministic and preserves immutable pack names',async()=>{
 const before=await read('startup-packs/index.json'),first=await buildStartupPacks(),between=await read('startup-packs/index.json'),second=await buildStartupPacks();
 assert.ok(before.equals(between));assert.ok(before.equals(await read('startup-packs/index.json')));assert.deepEqual(first,second);
});

test('pack source paths reject URLs, absolute paths and directory traversal',()=>{
 for(const value of ['', '../x.gz','models/../x.gz','/x.gz','a//b.gz','a/./b.gz','C:/x.gz','a\\b.gz','https://host/x.gz','x.gz?q=1','x.gz#fragment','x\0.gz'])assert.throws(()=>validateStartupAssetPath(value),/Invalid startup asset path/);
 assert.equal(validateStartupAssetPath('files/models/street/a/model.glb.gz'),'files/models/street/a/model.glb.gz');
});
