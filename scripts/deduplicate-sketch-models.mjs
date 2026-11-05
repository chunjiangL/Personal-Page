/** Repack only repeated physical GLB bytes. No accessor, texture or model changes. */
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gzipSync,gunzipSync} from 'node:zlib';
const root='assets/models/sketch-runtime/',manifest=JSON.parse(await fs.readFile(root+'manifest.json','utf8'));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex'),align=n=>(n+3)&~3;
const reports=[];
for(const [model,entry] of Object.entries(manifest.transport)){
 const originalGzip=await fs.readFile(root+entry.gzip),original=gunzipSync(originalGzip);
 if(original.readUInt32LE(0)!==0x46546c67)throw Error('Expected GLB: '+model);
 let json,bin;for(let at=12;at<original.length;){const length=original.readUInt32LE(at),type=original.readUInt32LE(at+4),data=original.subarray(at+8,at+8+length);if(type===0x4e4f534a)json=JSON.parse(data.toString());if(type===0x004e4942)bin=data;at+=8+length;}
 if(!json||!bin||json.buffers[0].uri)throw Error('Unsupported embedded GLB: '+model);
 const seen=new Map(),chunks=[],checks=[];let size=0;
 function move(view){
  if((view.buffer??0)!==0)return;
  const source=bin.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength);
  if(source.length!==view.byteLength)throw Error('Invalid source range');
  const key=hash(source);let offset=seen.get(key);
  if(offset===undefined){offset=size;seen.set(key,offset);chunks.push(source);size+=source.length;const padding=align(size)-size;if(padding){chunks.push(Buffer.alloc(padding));size+=padding;}}
  view.byteOffset=offset;checks.push({source,offset});
 }
 for(const view of json.bufferViews||[]){move(view);if(view.extensions?.EXT_meshopt_compression)move(view.extensions.EXT_meshopt_compression);}
 const packed=Buffer.concat(chunks);for(const {source,offset}of checks)if(!packed.subarray(offset,offset+source.length).equals(source))throw Error('Repacking changed referenced bytes');
 json.buffers[0].byteLength=packed.length;
 const text=Buffer.from(JSON.stringify(json)),jl=align(text.length),bl=align(packed.length),result=Buffer.alloc(28+jl+bl);
 result.writeUInt32LE(0x46546c67,0);result.writeUInt32LE(2,4);result.writeUInt32LE(result.length,8);result.writeUInt32LE(jl,12);result.writeUInt32LE(0x4e4f534a,16);result.fill(32,20,20+jl);text.copy(result,20);result.writeUInt32LE(bl,20+jl);result.writeUInt32LE(0x004e4942,24+jl);packed.copy(result,28+jl);
 const gzip=gzipSync(result,{level:9});
 // Do not trade network size for binary size on a small or already optimal file.
 const selected=gzip.length<originalGzip.length?result:original,compressed=gzip.length<originalGzip.length?gzip:originalGzip;
 await fs.writeFile(root+model,selected);await fs.writeFile(root+entry.gzip,compressed);
 entry.bytes=compressed.length;entry.sha256=hash(compressed);
 reports.push({model,oldBytes:originalGzip.length,bytes:compressed.length,referencedRangesChecked:checks.length});
}
const bytes=Buffer.from(JSON.stringify(manifest));await fs.writeFile(root+'manifest.json',bytes);await fs.writeFile(root+'manifest.json.gz',gzipSync(bytes,{level:9}));
const report={byteExact:true,beforeBytes:reports.reduce((n,r)=>n+r.oldBytes,0),afterBytes:reports.reduce((n,r)=>n+r.bytes,0),models:reports};
await fs.mkdir('artifacts',{recursive:true});await fs.writeFile('artifacts/model-deduplication.json',JSON.stringify(report,null,2));console.log(JSON.stringify({byteExact:report.byteExact,beforeBytes:report.beforeBytes,afterBytes:report.afterBytes}));
