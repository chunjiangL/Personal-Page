/** Lossless transport packing only. Original source and prepared cache stay unchanged. */
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {gzipSync,gunzipSync} from 'node:zlib';
import {geometryCodecReady,decodeGeometryArray} from './viewer/geometry-codec.mjs';
import {isRemovedVehicleMesh} from './viewer/vehicle-fleet.mjs';

const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),base=path.join(site,'assets/models/sketch-runtime');
const output=path.join(base,'prepared-compact');await fs.mkdir(output,{recursive:true});
const encoderPath=path.join(process.env.SKETCH_EXPORT_DEPS||path.join(os.tmpdir(),'sketch-showcase-export-deps'),'node_modules/meshoptimizer/meshopt_encoder.js');
const {MeshoptEncoder}=await import(pathToFileURL(encoderPath));await Promise.all([geometryCodecReady,MeshoptEncoder.ready]);
const original=JSON.parse(await fs.readFile(path.join(base,'prepared/manifest.json'),'utf8'));
const neighborhoodPath=path.join(site,'scripts/data/neighborhood-source-keys.json');
const splitScenes=process.argv.includes('--split-scenes')||await fs.access(neighborhoodPath).then(()=>true,()=>false);
const repack=process.argv.includes('--repack-stable')||process.argv.includes('--split-scenes')?JSON.parse(await fs.readFile(path.join(output,'manifest.json'),'utf8')):undefined;
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const meshes=Object.fromEntries(Object.entries(original.meshes).filter(([id])=>!isRemovedVehicleMesh(id))),used=new Set(Object.values(meshes));
const keyInput=splitScenes?await fs.readFile(neighborhoodPath):undefined;
const neighborhood=keyInput?JSON.parse(keyInput.toString()):undefined,exteriorKeys=new Set(Object.values(neighborhood?.meshes||{}));
if(neighborhood){
 if(neighborhood.schema!=='sketch.neighborhood.source-keys.v1'||!exteriorKeys.size)throw Error('Expected exact neighborhood source key manifest');
 for(const [id,key]of Object.entries(neighborhood.meshes)){
  if(isRemovedVehicleMesh(id))throw Error('Neighborhood still includes removed vehicle: '+id);
  if(!used.has(key)||!original.entries[key])throw Error('Neighborhood source key is missing from exact full cache: '+id+' '+key);
 }
}
const manifest={...original,schema:'sketch.prepared.geometry.v1',storage:'lossless-compact-v1',codec:'float32-exact-v1',entries:{},meshes,chunks:[]};
if(neighborhood){manifest.scene='full';manifest.sourceKeyManifestSHA256=hash(keyInput);}
const report={status:'pending',originalEntries:Object.keys(original.entries).length,entries:used.size,removedMeshes:Object.keys(original.meshes).length-Object.keys(meshes).length,removedEntries:Object.keys(original.entries).length-used.size,verifiedArrays:0,originalBytes:0,retainedBytes:0,compactBytes:0,gzipBytes:0,encodingCounts:{},attributes:{}};
const sourceChunks=new Map(),compactChunks=new Map();
async function sourceChunk(file,cache=sourceChunks){
 let result=cache.get(file);if(result){cache.delete(file);cache.set(file,result);return result;}
 result=gunzipSync(await fs.readFile(path.join(base,file)));cache.set(file,result);if(cache.size>3)cache.delete(cache.keys().next().value);return result;
}
const kinds=['stable-raw','stable-coded','transient-packed'];
const streams=Object.fromEntries((neighborhood?['exterior','home'].flatMap(partition=>kinds.map(kind=>partition+'-'+kind)):kinds).map(kind=>[kind,{kind,parts:[],length:0,index:0}]));
async function flush(stream){
 if(!stream.length)return;
 const bytes=Buffer.concat(stream.parts),packed=gzipSync(bytes,{level:9}),file='prepared-compact/'+stream.kind+'-'+String(stream.index).padStart(3,'0')+'.bin.gz';
 if(!gunzipSync(packed).equals(bytes))throw Error('Compact chunk gzip mismatch');
 await fs.writeFile(path.join(base,file),packed);
 manifest.chunks.push({file,bytes:packed.length,inflatedBytes:bytes.length,transient:stream.kind.endsWith('transient-packed'),...(neighborhood?{partition:stream.kind.startsWith('exterior-')?'exterior':'home'}:{}),sha256:hash(packed)});
 report.compactBytes+=bytes.length;report.gzipBytes+=packed.length;stream.parts=[];stream.length=0;stream.index++;
 console.log('Wrote '+file+' '+(packed.length/1e6).toFixed(2)+' MB');
}
async function append(kind,bytes){
 const stream=streams[kind];if(stream.length&&stream.length+bytes.length>24*1024*1024)await flush(stream);
 const record={chunk:'prepared-compact/'+kind+'-'+String(stream.index).padStart(3,'0')+'.bin.gz',byteOffset:stream.length,encodedLength:bytes.length};
 stream.parts.push(bytes);stream.length+=bytes.length;const padding=(4-stream.length%4)%4;if(padding){stream.parts.push(Buffer.alloc(padding));stream.length+=padding;}return record;
}
function encode(source,stride){return Buffer.from(MeshoptEncoder.encodeGltfBuffer(source,source.length/stride,stride,'ATTRIBUTES',0));}
function dictionary(source){
 const words=new Uint32Array(source.buffer,source.byteOffset,source.byteLength/4),values=[],map=new Map(),indices=new Uint32Array(words.length);
 for(let i=0;i<words.length;i++){const word=words[i];let id=map.get(word);if(id===undefined){id=values.length;map.set(word,id);values.push(word);}indices[i]=id;}
 const size=values.length<=256?1:values.length<=65536?2:4,typed=size===1?new Uint8Array(indices):size===2?new Uint16Array(indices):indices,dict=new Uint32Array(values);
 return {encoding:'dictionary',dictionaryCount:values.length,indexBytes:size,bytes:Buffer.concat([Buffer.from(dict.buffer),Buffer.from(typed.buffer)])};
}
function compact(source,name,stride){
 const choices=[{encoding:'raw',bytes:Buffer.from(source)},{encoding:'meshopt',byteStride:stride,bytes:encode(source,stride)}];
 if(name==='labStructureEdges'){
  if(source.length%36)throw Error('Structure edges do not consist of triangle triples');
  const collapsed=Buffer.allocUnsafe(source.length/3);
  for(let at=0;at<source.length;at+=36){const triple=source.subarray(at,at+12);if(!triple.equals(source.subarray(at+12,at+24))||!triple.equals(source.subarray(at+24,at+36)))throw Error('Structure edge vertices differ');triple.copy(collapsed,at/3);}
  choices.push({encoding:'triangle-raw',bytes:collapsed},{encoding:'triangle-meshopt',byteStride:12,bytes:encode(collapsed,12)});
 }
 if(source.length)choices.push(dictionary(source));
 for(const choice of choices){
  choice.gzip=gzipSync(choice.bytes,{level:9}).length;
  const decoded=decodeGeometryArray(choice.bytes,{...choice,byteOffset:0,encodedLength:choice.bytes.length,length:source.length/4});
  if(!source.equals(new Uint8Array(decoded.buffer,decoded.byteOffset,decoded.byteLength)))throw Error('Codec changed source bits: '+name+' '+choice.encoding);
 }
 choices.sort((a,b)=>a.gzip-b.gzip);const chosen=choices[0];delete chosen.gzip;return chosen;
}
for(const [key,entry]of Object.entries(original.entries)){
 const entryBytes=Object.values(entry.attributes).reduce((n,v)=>n+v.length*4,entry.field.length*4);report.originalBytes+=entryBytes;if(!used.has(key))continue;
 report.retainedBytes+=entryBytes;const next={...entry,attributes:{}};delete next.chunk;
 for(const [name,view]of [...Object.entries(entry.attributes),['field',entry.field]]){
  const chunk=await sourceChunk(view.chunk||entry.chunk),source=chunk.subarray(view.byteOffset,view.byteOffset+view.length*4),stride=name==='field'?32:view.itemSize*4;
  let choice;
  if(repack){
   const old=name==='field'?repack.entries[key].field:repack.entries[key].attributes[name],packed=await sourceChunk(old.chunk,compactChunks);
   const {chunk,byteOffset,encodedLength,length,itemSize,...metadata}=old;
   choice={...metadata,bytes:Buffer.from(packed.subarray(byteOffset,byteOffset+encodedLength))};
   const decoded=decodeGeometryArray(choice.bytes,{...metadata,byteOffset:0,encodedLength:choice.bytes.length,length});
   if(!source.equals(new Uint8Array(decoded.buffer,decoded.byteOffset,decoded.byteLength)))throw Error('Repacking changed source bits: '+key+' '+name);
  }else choice=compact(source,name,stride);
  const {bytes,...codec}=choice,kind=name==='field'||name==='labStructureEdges'?'transient-packed':codec.encoding==='raw'?'stable-raw':'stable-coded';
  const location=await append((neighborhood?(exteriorKeys.has(key)?'exterior-':'home-'):'')+kind,bytes);
  const compactView={...location,length:view.length,...(view.itemSize?{itemSize:view.itemSize}:{}),...codec};
  if(name==='field')next.field=compactView;else next.attributes[name]=compactView;
  report.verifiedArrays++;report.encodingCounts[codec.encoding]=(report.encodingCounts[codec.encoding]||0)+1;
  const stats=report.attributes[name]??={originalBytes:0,encodedBytes:0,arrays:0};stats.originalBytes+=source.length;stats.encodedBytes+=bytes.length;stats.arrays++;
 }
 manifest.entries[key]=next;
}
for(const stream of Object.values(streams))await flush(stream);
const manifestBytes=Buffer.from(JSON.stringify(manifest)),manifestGzip=gzipSync(manifestBytes,{level:9});
await fs.writeFile(path.join(output,'manifest.json'),manifestBytes);await fs.writeFile(path.join(output,'manifest.json.gz'),manifestGzip);
report.status='pass';report.chunks=manifest.chunks.length;report.manifestBytes=manifestBytes.length;report.manifestGzipBytes=manifestGzip.length;report.originalGzipBytes=original.chunks.reduce((n,c)=>n+c.bytes,0);report.totalGzipBytes=report.gzipBytes+manifestGzip.length;
if(neighborhood){
 await fs.writeFile(path.join(output,'full-manifest.json'),manifestBytes);await fs.writeFile(path.join(output,'full-manifest.json.gz'),manifestGzip);
 const neighborhoodManifest={...manifest,scene:'neighborhood',meshes:neighborhood.meshes,entries:Object.fromEntries(Object.entries(manifest.entries).filter(([key])=>exteriorKeys.has(key))),chunks:manifest.chunks.filter(chunk=>chunk.partition==='exterior')};
 const neighborhoodBytes=Buffer.from(JSON.stringify(neighborhoodManifest)),neighborhoodGzip=gzipSync(neighborhoodBytes,{level:9});
 await fs.writeFile(path.join(output,'neighborhood-manifest.json'),neighborhoodBytes);await fs.writeFile(path.join(output,'neighborhood-manifest.json.gz'),neighborhoodGzip);
 report.neighborhood={entries:exteriorKeys.size,meshes:Object.keys(neighborhood.meshes).length,chunks:neighborhoodManifest.chunks.length,chunkGzipBytes:neighborhoodManifest.chunks.reduce((n,c)=>n+c.bytes,0),inflatedBytes:neighborhoodManifest.chunks.reduce((n,c)=>n+c.inflatedBytes,0),manifestGzipBytes:neighborhoodGzip.length};
 report.neighborhood.totalGzipBytes=report.neighborhood.chunkGzipBytes+neighborhoodGzip.length;
 report.homeAdditionalGzipBytes=manifest.chunks.filter(chunk=>chunk.partition==='home').reduce((n,c)=>n+c.bytes,0);
}
await fs.writeFile(path.join(output,'validation.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
if(repack){
 const retained=new Set(manifest.chunks.map(chunk=>chunk.file));
 for(const chunk of repack.chunks){if(retained.has(chunk.file))continue;const target=path.resolve(base,chunk.file);
  if(path.dirname(target)!==path.resolve(output)||!/^((stable|transient)-\d{3}|((exterior|home)-)?(stable-(raw|coded)|transient-packed)-\d{3})\.bin\.gz$/.test(path.basename(target)))throw Error('Unexpected obsolete compact chunk');
  await fs.unlink(target);
 }
}
