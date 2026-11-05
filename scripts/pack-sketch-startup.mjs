/** Reduce request round trips without changing any compressed asset bytes. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';

const defaultBase=fileURLToPath(new URL('../assets/models/sketch-runtime/',import.meta.url));
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const order=(a,b)=>a<b?-1:a>b?1:0;
const expectedCounts={models:29,geometryChunks:10,contourChunks:2,members:44};
const maxPackBytes=20_000_000;

export function validateStartupAssetPath(relative){
 if(typeof relative!=='string'||!relative||/[\\:?#\x00-\x1f]/.test(relative)||relative.split('/').some(part=>!part||part==='.'||part==='..'))throw Error('Invalid startup asset path: '+relative);
 return relative;
}

function contained(base,file){const relative=path.relative(base,file);return relative!==''&&!path.isAbsolute(relative)&&relative!=='..'&&!relative.startsWith('..'+path.sep);}

/** Always derive and verify the index from current manifests, never a saved list. */
export async function buildStartupPacks({baseDir=defaultBase}={}){
 const base=await fs.realpath(path.resolve(baseDir)),members=new Map();
 async function read(relative){validateStartupAssetPath(relative);const file=await fs.realpath(path.join(base,relative));if(!contained(base,file))throw Error('Startup asset escapes its root: '+relative);return fs.readFile(file);}
 async function member(relative,expected={}){
  validateStartupAssetPath(relative);if(!relative.endsWith('.gz'))throw Error('Startup members must already be gzip files: '+relative);
  if(members.has(relative))throw Error('Duplicate startup asset: '+relative);
  const bytes=await read(relative),sha256=digest(bytes);
  if(expected.sha256!==undefined&&(!/^[a-f0-9]{64}$/.test(expected.sha256)||expected.sha256!==sha256))throw Error('Startup asset checksum mismatch: '+relative);
  if(expected.bytes!==undefined&&expected.bytes!==bytes.length)throw Error('Startup asset length mismatch: '+relative);
  const inflated=gunzipSync(bytes);if(expected.inflatedBytes!==undefined&&expected.inflatedBytes!==inflated.length)throw Error('Startup asset inflated length mismatch: '+relative);
  members.set(relative,{relative,bytes,sha256});return inflated;
 }
 async function manifest(relative,schema){
  const decoded=await member(relative+'.gz'),plain=await read(relative);if(!decoded.equals(plain))throw Error('Compressed manifest differs from source: '+relative);
  const json=JSON.parse(decoded);if(json.schema!==schema)throw Error('Unexpected startup manifest schema: '+relative);return json;
 }
 const main=await manifest('manifest.json','sketch.showcase.runtime.v1');
 const models=Object.entries(main.transport).filter(([file])=>file.startsWith('files/models/'));
 if(models.length!==expectedCounts.models)throw Error('Review changed neighborhood model membership: '+models.length);
 const fileReferences=new Set(Object.values(main.files));
 for(const relative of [...fileReferences,...Object.keys(main.transport),...Object.values(main.transport).map(entry=>entry.gzip),...Object.values(main.assemblies).map(entry=>entry.model)])validateStartupAssetPath(relative);
 for(const [file,transport]of models){
  if(!fileReferences.has(file)||transport.gzip!==file+'.gz')throw Error('Unresolved neighborhood model reference: '+file);
  const decoded=await member(transport.gzip,transport),original=await read(file);if(!decoded.equals(original))throw Error('Compressed model differs from source: '+file);
  if(decoded.length<12||decoded.toString('ascii',0,4)!=='glTF'||decoded.readUInt32LE(4)!==2||decoded.readUInt32LE(8)!==decoded.length)throw Error('Invalid original GLB: '+file);
 }
 const geometry=await manifest('prepared-compact/neighborhood-manifest.json','sketch.prepared.geometry.v1');
 const contours=await manifest('contours/neighborhood-manifest.json','sketch.contours.v1');
 if(geometry.scene!=='neighborhood'||contours.partition?.mode!=='neighborhood')throw Error('Startup packs require the neighborhood partitions');
 if(geometry.sourceKeyManifestSHA256!==contours.partition.sourceKeyManifestSHA256)throw Error('Neighborhood geometry and contour sources differ');
 for(const [label,data,count]of [['geometry',geometry,expectedCounts.geometryChunks],['contours',contours,expectedCounts.contourChunks]]){
  if(data.chunks.length!==count)throw Error('Review changed neighborhood '+label+' chunk count: '+data.chunks.length);
  const files=new Set(data.chunks.map(chunk=>chunk.file));if(files.size!==data.chunks.length)throw Error('Duplicate '+label+' chunk');
  for(const chunk of data.chunks)await member(chunk.file,chunk);
  for(const [key,entry]of Object.entries(data.entries)){
   const references=label==='contours'?[entry.chunk]:[entry.chunk,...Object.values(entry.attributes).map(attribute=>attribute.chunk||entry.chunk),entry.field.chunk||entry.chunk].filter(Boolean);
   for(const relative of references)if(!files.has(relative))throw Error('Unresolved '+label+' chunk reference: '+key+' -> '+relative);
  }
  for(const [id,key]of Object.entries(data.meshes))if(!data.entries[key])throw Error('Unresolved '+label+' mesh entry: '+id);
 }
 if(members.size!==expectedCounts.members)throw Error('Review changed neighborhood startup membership: '+members.size);
 // Largest-first scheduling balances the three downloads deterministically.
 const bins=Array.from({length:3},(_,index)=>({index,bytes:0,members:[]}));
 for(const item of [...members.values()].sort((a,b)=>b.bytes.length-a.bytes.length||order(a.relative,b.relative))){const bin=[...bins].sort((a,b)=>a.bytes-b.bytes||a.index-b.index)[0];bin.members.push(item);bin.bytes+=item.bytes.length;}
 if(bins.some(bin=>bin.bytes>maxPackBytes))throw Error('Startup pack exceeds the 20 MB budget');
 const directory=path.join(base,'startup-packs');await fs.mkdir(directory,{recursive:true});if(!contained(base,await fs.realpath(directory)))throw Error('Startup pack output escapes its root');
 const index={schema:'sketch.startup-packs.v1',format:'concatenated-gzip-members',scene:'neighborhood',memberCount:members.size,totalBytes:0,members:{},packs:[]},indexed=[];
 async function writeIfChanged(relative,bytes){const file=path.join(base,relative),previous=await fs.readFile(file).catch(error=>{if(error.code!=='ENOENT')throw error;});if(!previous?.equals(bytes))await fs.writeFile(file,bytes);}
 for(const bin of bins){
  bin.members.sort((a,b)=>order(a.relative,b.relative));const bytes=Buffer.concat(bin.members.map(item=>item.bytes)),sha256=digest(bytes),file='startup-packs/neighborhood-'+sha256+'.bin';
  await writeIfChanged(file,bytes);const stored=await read(file);if(digest(stored)!==sha256)throw Error('Startup pack verification failed: '+file);
  let offset=0;for(const item of bin.members){const slice=stored.subarray(offset,offset+item.bytes.length);if(!slice.equals(item.bytes)||digest(slice)!==item.sha256)throw Error('Packed member differs from source: '+item.relative);indexed.push([item.relative,{sha256:item.sha256,pack:file,offset,length:item.bytes.length}]);offset+=item.bytes.length;}
  if(offset!==stored.length)throw Error('Startup pack has unindexed bytes');index.packs.push({file,sha256,bytes:bytes.length});index.totalBytes+=bytes.length;
 }
 index.members=Object.fromEntries(indexed.sort(([a],[b])=>order(a,b)));
 await writeIfChanged('startup-packs/index.json',Buffer.from(JSON.stringify(index,null,2)+'\n'));
 return index;
}

if(process.argv[1]&&pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url){
 const index=await buildStartupPacks();console.log(JSON.stringify({status:'pass',members:index.memberCount,bytes:index.totalBytes,packs:index.packs,indexBytes:Buffer.byteLength(JSON.stringify(index))}));
}
