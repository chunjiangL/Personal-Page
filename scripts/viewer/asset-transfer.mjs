// Cache compressed public assets by content, independently of page deployments.
// The cache is an accelerator only: quota/private-mode failures use normal fetch.
const cacheName='sketch-showcase-assets-v1';
let cachePromise;
const query=typeof location==='undefined'?null:new URL(location.href).searchParams;
// QA-only cold-load measurement: do not confuse an already cached visit with
// a first visit. This leaves ordinary visitors and their saved cache unchanged.
const coldBenchmark=query?.has('qa')&&query?.get('cold')==='1';
const startupPacks=typeof __SKETCH_STARTUP_PACKS__==='undefined'?null:__SKETCH_STARTUP_PACKS__;
const packLoads=new Map();
let packsDisabled=false;
export const transferStats={hits:0,downloads:0,compressedBytes:0,packedMembers:0};
async function cache(){return cachePromise??=(globalThis.caches?caches.open(cacheName).catch(()=>null):Promise.resolve(null));}
export function assetURL(base,relative,hash){const url=new URL(relative,base);url.search=hash?'h='+hash:'';return url.href;}
const checksum=async bytes=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(n=>n.toString(16).padStart(2,'0')).join('');
async function download(url){
 const response=await fetch(url,coldBenchmark?{cache:'reload'}:undefined);if(!response.ok)throw Error('Could not load '+url);
 transferStats.downloads++;const bytes=await response.arrayBuffer();transferStats.compressedBytes+=bytes.byteLength;return bytes;
}
function beginPacks(base){
 // Start the three balanced transfers together. In particular, the small
 // manifest member must not serialize the rest of the initial downloads.
 for(const pack of startupPacks.packs){
  const url=assetURL(base,pack.file,pack.sha256);if(packLoads.has(url))continue;
  packLoads.set(url,(async()=>{const bytes=await download(url);if(bytes.byteLength!==pack.bytes||await checksum(bytes)!==pack.sha256)throw Error('Startup pack checksum mismatch');return bytes;})().catch(()=>null));
 }
}
// On a failed startup, ongoing workers use individual-file fallbacks and cannot
// repopulate the cleared pack map. Retry reloads the module with a clean state.
export function releaseStartupPacks(disable=false){if(disable)packsDisabled=true;packLoads.clear();}
async function packedMember(base,relative,hash){
 const member=!packsDisabled&&startupPacks?.members[relative];if(!member||member.sha256!==hash)return;
 const pack=startupPacks.packs.find(item=>item.file===member.pack);if(!pack)return;
 beginPacks(base);const bytes=await packLoads.get(assetURL(base,pack.file,pack.sha256));
 // A missing/corrupt CDN pack can always fall back to the original gzip file.
 if(!bytes||member.offset<0||member.offset+member.length>bytes.byteLength)return;
 const slice=bytes.slice(member.offset,member.offset+member.length);if(await checksum(slice)!==hash)return;
 transferStats.packedMembers++;return slice;
}
export async function unpackAsset(base,relative,hash){
 const url=assetURL(base,relative,hash),storage=hash?await cache():null;
 let response=coldBenchmark?undefined:await storage?.match(url).catch(()=>undefined);
 const hit=!!response;
 if(hit)transferStats.hits++;
 const compressed=hit?await response.arrayBuffer():await packedMember(base,relative,hash)??await download(url);
 if(hash){const actual=await checksum(compressed);if(actual!==hash){await storage?.delete(url).catch(()=>{});if(hit){cachePromise=Promise.resolve(null);return unpackAsset(base,relative,hash);}throw Error('Asset checksum mismatch: '+relative);}}
 if(storage&&!hit)void storage.put(url,new Response(compressed)).catch(()=>{});
 return new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip')));
}
