import test from 'node:test';import assert from 'node:assert/strict';
import {downloadBytes,optionalCache} from '../scripts/viewer/resilient-download.mjs';
const fetchOriginal=globalThis.fetch;
test.afterEach(()=>{globalThis.fetch=fetchOriginal;});
const data=new Uint8Array([1,2,3,4,5,6,7,8,9,10]);
test('a stalled segment is retried at the same offset without downloading completed bytes again',async()=>{
 const requests=[],progress=[];let failed=false;
 globalThis.fetch=async(_,options)=>{
  const range=options.headers.Range;requests.push(range);const [,a,b]=/bytes=(\d+)-(\d+)/.exec(range),start=+a,end=Math.min(+b,data.length-1);
  if(start===4&&!failed){failed=true;return new Promise(()=>{});}
  return new Response(data.slice(start,end+1),{status:206,headers:{'Content-Range':`bytes ${start}-${end}/${data.length}`}});
 };
 assert.deepEqual(new Uint8Array(await downloadBytes('https://example.test/room.gz',{rangeSize:4,timeoutMs:20,onProgress:e=>progress.push(e)})),data);
 assert.deepEqual(requests,['bytes=0-3','bytes=4-7','bytes=4-7','bytes=8-11']);assert.ok(progress.some(e=>e.state==='retrying'&&e.loaded===4));
});
test('a server ignoring Range returns one complete object, never appended duplicates',async()=>{
 let n=0;globalThis.fetch=async()=>++n===1?new Response(data.slice(0,4),{status:206,headers:{'Content-Range':'bytes 0-3/10'}}):new Response(data);
 assert.deepEqual(new Uint8Array(await downloadBytes('https://example.test/a',{rangeSize:4})),data);assert.equal(n,2);
});
test('truncated body retries only its segment and verifies its byte length',async()=>{
 let n=0;globalThis.fetch=async()=>new Response(++n===1?data.slice(0,3):data,{status:206,headers:{'Content-Range':'bytes 0-9/10'}});
 assert.deepEqual(new Uint8Array(await downloadBytes('https://example.test/a',{rangeSize:16})),data);assert.equal(n,2);
});
test('persistent body stalls terminate, rather than waiting forever after HTTP headers',async()=>{
 let n=0;globalThis.fetch=async()=>{n++;return new Response(new ReadableStream({start(c){c.enqueue(new Uint8Array([1]));}}));};
 await assert.rejects(downloadBytes('https://example.test/bedroom.glb.gz',{timeoutMs:20,retries:1}),/No download progress/);assert.equal(n,2);
});
test('unresolved cache operations time out and permit network fallback',async()=>{
 assert.equal(await optionalCache(()=>new Promise(()=>{}),20),undefined);
 assert.equal(await optionalCache(()=>Promise.reject(Error('disabled'))),undefined);
});
