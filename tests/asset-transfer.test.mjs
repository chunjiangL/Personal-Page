import test from 'node:test';
import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
const compressed=gzipSync('original asset bytes'),hash=createHash('sha256').update(compressed).digest('hex');
const originalFetch=globalThis.fetch,originalCaches=globalThis.caches;
test.afterEach(()=>{globalThis.fetch=originalFetch;globalThis.caches=originalCaches;});

test('content-addressed asset cache survives page versions and reuses exact compressed data',async()=>{
 const entries=new Map();globalThis.caches={open:async()=>({match:async url=>entries.get(url)?.clone(),put:async(url,response)=>{entries.set(url,response);},delete:async url=>entries.delete(url)})};
 let downloads=0;globalThis.fetch=async()=>{downloads++;return new Response(compressed);};
 const {unpackAsset,assetURL,transferStats}=await import('../scripts/viewer/asset-transfer.mjs?cache-test');
 const a='https://example.com/models/?v=first',b='https://example.com/models/?v=second';
 assert.equal(assetURL(a,'asset.gz',hash),assetURL(b,'asset.gz',hash));
 assert.equal(await(await unpackAsset(a,'asset.gz',hash)).text(),'original asset bytes');
 assert.equal(await(await unpackAsset(b,'asset.gz',hash)).text(),'original asset bytes');
 assert.equal(downloads,1);assert.deepEqual([transferStats.downloads,transferStats.hits],[1,1]);
});

test('unavailable persistent storage still loads the scene normally',async()=>{
 globalThis.caches={open:async()=>{throw Error('Storage unavailable');}};globalThis.fetch=async()=>new Response(compressed);
 const {unpackAsset}=await import('../scripts/viewer/asset-transfer.mjs?unavailable-test');
 assert.equal(await(await unpackAsset('https://example.com/','asset.gz',hash)).text(),'original asset bytes');
});

test('corrupt cached content is evicted and retried once from the network',async()=>{
 let deleted=false;globalThis.caches={open:async()=>({match:async()=>new Response(gzipSync('wrong bytes')),delete:async()=>{deleted=true;}})};
 let fetches=0;globalThis.fetch=async()=>{fetches++;return new Response(compressed);};
 const {unpackAsset}=await import('../scripts/viewer/asset-transfer.mjs?corrupt-test');
 assert.equal(await(await unpackAsset('https://example.com/','asset.gz',hash)).text(),'original asset bytes');assert.equal(deleted,true);assert.equal(fetches,1);
});

test('corrupt network content is rejected without an infinite retry',async()=>{
 globalThis.caches=undefined;let fetches=0;globalThis.fetch=async()=>{fetches++;return new Response(gzipSync('wrong bytes'));};
 const {unpackAsset}=await import('../scripts/viewer/asset-transfer.mjs?bad-network-test');
 await assert.rejects(unpackAsset('https://example.com/','asset.gz',hash),/checksum mismatch/);assert.equal(fetches,1);
});
