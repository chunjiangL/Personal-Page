import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const base='https://example.com/assets/models/sketch-runtime/';
const original={fetch:globalThis.fetch,caches:globalThis.caches,location:globalThis.location,matchMedia:globalThis.matchMedia};
let moduleId=0;
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
test.afterEach(()=>{globalThis.fetch=original.fetch;globalThis.caches=original.caches;if(original.location===undefined)delete globalThis.location;else globalThis.location=original.location;if(original.matchMedia===undefined)delete globalThis.matchMedia;else globalThis.matchMedia=original.matchMedia;});
function fixture(){
 const index={packs:[],members:{}},files=new Map(),contents=new Map();
 for(let pack=0;pack<3;pack++){
  const pieces=[];let offset=0;
  for(let member=0;member<2;member++){
   const relative='member-'+pack+'-'+member+'.gz',plain=Buffer.concat([Buffer.from(relative+'\n'),Buffer.from(Array.from({length:48+pack*7+member},(_,i)=>(i*17+pack)%256))]),compressed=gzipSync(plain),file='startup/pack-'+pack+'.bin';
   pieces.push(compressed);files.set(relative,compressed);contents.set(relative,plain);index.members[relative]={pack:file,offset,length:compressed.length,sha256:hash(compressed)};offset+=compressed.length;
  }
  const file='startup/pack-'+pack+'.bin',bytes=Buffer.concat(pieces);files.set(file,bytes);index.packs.push({file,bytes:bytes.length,sha256:hash(bytes)});
 }
 return {index,files,contents};
}
async function moduleFor(index){
 const bundle=await build({entryPoints:[fileURLToPath(new URL('../scripts/viewer/asset-transfer.mjs',import.meta.url))],bundle:true,write:false,format:'esm',platform:'browser',target:'es2022',define:{__SKETCH_STARTUP_PACKS__:JSON.stringify(index)},logLevel:'silent'});
 return import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text+'\n// test module '+moduleId++).toString('base64'));
}
function cacheStore(){
 const entries=new Map(),stats={matches:0,puts:0},store={
  async match(url){stats.matches++;return entries.get(String(url))?.clone();},
  async put(url,response){stats.puts++;entries.set(String(url),response);},
  async delete(url){return entries.delete(String(url));}
 };
 globalThis.caches={open:async()=>store};return {entries,stats};
}
function network(f,custom){
 const calls=[];globalThis.fetch=async(url,options)=>{
  const relative=new URL(url).pathname.split('/sketch-runtime/')[1];calls.push({relative,options});
  const response=await custom?.(relative,options);if(response)return response;
  const bytes=f.files.get(relative);assert.ok(bytes,'Unexpected URL '+url);return new Response(bytes);
 };return calls;
}
async function consume(module,f,relative){
 const result=await(await module.unpackAsset(base,relative,f.index.members[relative].sha256)).arrayBuffer();assert.ok(f.contents.get(relative).equals(new Uint8Array(result)));return result;
}
const nextTurn=()=>new Promise(resolve=>setImmediate(resolve));

test('touch devices download only requested members, never desktop startup packs',async()=>{
 globalThis.matchMedia=()=>({matches:true});globalThis.caches=undefined;
 const f=fixture(),calls=network(f),module=await moduleFor(f.index),relative=Object.keys(f.index.members)[0];
 await consume(module,f,relative);
 assert.deepEqual(calls.map(c=>c.relative),[relative]);assert.equal(module.transferStats.packedMembers,0);
});

test('six concurrent exact gzip members start only three pack transfers, including before the first member finishes',async()=>{
 globalThis.caches=undefined;const f=fixture(),gates=new Map(f.index.packs.map(pack=>{let resolve;const promise=new Promise(done=>{resolve=done;});return [pack.file,{promise,resolve}];}));
 const calls=network(f,async relative=>{if(gates.has(relative))await gates.get(relative).promise;});
 const module=await moduleFor(f.index),pending=Object.keys(f.index.members).map(relative=>consume(module,f,relative));
 await nextTurn();assert.deepEqual(calls.map(call=>call.relative).sort(),f.index.packs.map(pack=>pack.file).sort());
 for(const gate of gates.values())gate.resolve();await Promise.all(pending);
 assert.equal(calls.length,3);assert.deepEqual(module.transferStats,{hits:0,downloads:3,compressedBytes:f.index.packs.reduce((n,p)=>n+p.bytes,0),packedMembers:6});module.releaseStartupPacks();
});

test('warm individual CacheStorage entries survive pack release and module reload without network requests',async()=>{
 const f=fixture(),storage=cacheStore(),calls=network(f),first=await moduleFor(f.index);
 await Promise.all(Object.keys(f.index.members).map(relative=>consume(first,f,relative)));assert.equal(calls.length,3);assert.equal(storage.entries.size,6);first.releaseStartupPacks();
 const warm=await moduleFor(f.index);await Promise.all(Object.keys(f.index.members).map(relative=>consume(warm,f,relative)));
 assert.equal(calls.length,3);assert.equal(warm.transferStats.hits,6);assert.equal(warm.transferStats.downloads,0);warm.releaseStartupPacks();
});

test('mixed cached members and pack members remain independently usable',async()=>{
 const f=fixture(),storage=cacheStore(),module=await moduleFor(f.index);
 for(const relative of ['member-0-0.gz','member-1-1.gz'])storage.entries.set(module.assetURL(base,relative,f.index.members[relative].sha256),new Response(f.files.get(relative)));
 const calls=network(f);await Promise.all(Object.keys(f.index.members).map(relative=>consume(module,f,relative)));
 assert.equal(calls.length,3);assert.equal(module.transferStats.hits,2);assert.equal(module.transferStats.packedMembers,4);assert.equal(storage.entries.size,6);module.releaseStartupPacks();
});

test('missing and corrupt whole packs fall back to exact individual gzip files without repeated pack retries',async()=>{
 for(const failure of ['missing','corrupt']){
  globalThis.caches=undefined;const f=fixture(),bad=f.index.packs[1].file;
  const calls=network(f,relative=>relative===bad?failure==='missing'?new Response('missing',{status:404}):new Response(Buffer.alloc(f.files.get(relative).length,7)):undefined),module=await moduleFor(f.index);
  await Promise.all(Object.keys(f.index.members).map(relative=>consume(module,f,relative)));
  assert.equal(calls.filter(call=>call.relative.startsWith('startup/')).length,3);assert.deepEqual(calls.filter(call=>!call.relative.startsWith('startup/')).map(call=>call.relative).sort(),['member-1-0.gz','member-1-1.gz']);
  assert.equal(module.transferStats.packedMembers,4);module.releaseStartupPacks();
 }
});

test('a valid pack with a wrong member slice falls back after the member checksum fails',async()=>{
 globalThis.caches=undefined;const f=fixture(),index=structuredClone(f.index);index.members['member-0-0.gz'].offset++;
 const calls=network(f),module=await moduleFor(index);await consume(module,f,'member-0-0.gz');
 assert.equal(calls.filter(call=>call.relative==='member-0-0.gz').length,1);assert.equal(module.transferStats.packedMembers,0);module.releaseStartupPacks();
});

test('ordinary release drops fulfilled pack buffers and permits a later refill',async()=>{
 globalThis.caches=undefined;const f=fixture(),calls=network(f),module=await moduleFor(f.index);
 await Promise.all(Object.keys(f.index.members).map(relative=>consume(module,f,relative)));assert.equal(calls.length,3);
 await consume(module,f,'member-0-0.gz');assert.equal(calls.length,3);
 module.releaseStartupPacks();await Promise.all(Object.keys(f.index.members).map(relative=>consume(module,f,relative)));assert.equal(calls.length,6);module.releaseStartupPacks();
});

test('fatal release prevents late workers from repopulating packs while previous downloads resolve',async()=>{
 globalThis.caches=undefined;const f=fixture();let unblock;const gate=new Promise(resolve=>{unblock=resolve;});
 const calls=network(f,async relative=>{if(relative.startsWith('startup/'))await gate;}),module=await moduleFor(f.index),pending=consume(module,f,'member-0-0.gz');
 await nextTurn();assert.equal(calls.length,3);module.releaseStartupPacks(true);
 await consume(module,f,'member-1-0.gz');unblock();await pending;await consume(module,f,'member-2-0.gz');
 assert.equal(calls.filter(call=>call.relative.startsWith('startup/')).length,3);assert.deepEqual(calls.filter(call=>!call.relative.startsWith('startup/')).map(call=>call.relative),['member-1-0.gz','member-2-0.gz']);
 module.releaseStartupPacks();await consume(module,f,'member-0-1.gz');assert.equal(calls.filter(call=>call.relative.startsWith('startup/')).length,3);
});

test('QA cold mode bypasses individual CacheStorage and requests each pack with HTTP reload',async()=>{
 const f=fixture(),storage=cacheStore();globalThis.location={href:'https://example.com/gallery.html?qa=1&cold=1'};const module=await moduleFor(f.index);
 for(const [relative,member]of Object.entries(f.index.members))storage.entries.set(module.assetURL(base,relative,member.sha256),new Response(f.files.get(relative)));
 const calls=network(f);await Promise.all(Object.keys(f.index.members).map(relative=>consume(module,f,relative)));
 assert.equal(storage.stats.matches,0);assert.equal(calls.length,3);assert.ok(calls.every(call=>call.options?.cache==='reload'));module.releaseStartupPacks();
});
