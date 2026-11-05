// Cache compressed public assets by content, independently of page deployments.
// The cache is an accelerator only: quota/private-mode failures use normal fetch.
const cacheName='sketch-showcase-assets-v1';
let cachePromise;
export const transferStats={hits:0,downloads:0,compressedBytes:0};
async function cache(){return cachePromise??=(globalThis.caches?caches.open(cacheName).catch(()=>null):Promise.resolve(null));}
export function assetURL(base,relative,hash){const url=new URL(relative,base);url.search=hash?'h='+hash:'';return url.href;}
export async function unpackAsset(base,relative,hash){
 const url=assetURL(base,relative,hash),storage=hash?await cache():null;
 let response=await storage?.match(url).catch(()=>undefined);
 const hit=!!response;
 if(hit)transferStats.hits++;
 else{
  response=await fetch(url);if(!response.ok)throw Error('Could not load '+relative);
  transferStats.downloads++;transferStats.compressedBytes+=Number(response.headers.get('content-length'))||0;
 }
 const compressed=await response.arrayBuffer();
 if(hash){const actual=[...new Uint8Array(await crypto.subtle.digest('SHA-256',compressed))].map(n=>n.toString(16).padStart(2,'0')).join('');if(actual!==hash){await storage?.delete(url).catch(()=>{});if(hit){cachePromise=Promise.resolve(null);return unpackAsset(base,relative,hash);}throw Error('Asset checksum mismatch: '+relative);}}
 if(storage&&!hit)void storage.put(url,new Response(compressed)).catch(()=>{});
 return new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip')));
}
