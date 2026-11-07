import test from 'node:test';
import assert from 'node:assert/strict';
import reader from '../scripts/cloudflare/worlds-assets.js';
import uploader from '../scripts/cloudflare/worlds-upload.js';

test('terrain endpoint returns gzip bytes without triggering HTTP decompression and varies CORS',async()=>{
  const bytes=new Uint8Array([31,139,8,0]),pending=[];let reads=0,cached;
  globalThis.caches={default:{match:async()=>cached?.clone(),put:async(_key,res)=>{cached=res;}}};
  const env={TERRAIN:{get:async()=>{reads++;return {body:bytes,size:4,range:{offset:0,length:4},httpEtag:'"test"',writeHttpMetadata:h=>{h.set('Content-Type','application/gzip');h.set('Content-Encoding','gzip');}};}}};
  const url='https://assets.example/v1/space/tiles/watershed/1_2_3.gz';
  const response=await reader.fetch(new Request(url,{headers:{Origin:'https://chunjiangliu.com'}}),env,{waitUntil:p=>pending.push(p)});
  assert.equal(response.status,200);assert.equal(response.headers.get('Content-Encoding'),null);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'),'https://chunjiangliu.com');
  assert.deepEqual(new Uint8Array(await response.arrayBuffer()),bytes);await Promise.all(pending);
  const head=await reader.fetch(new Request(url,{method:'HEAD',headers:{Origin:'https://unrelated.example'}}),env,{waitUntil(){}});
  assert.equal(reads,1);assert.equal(head.headers.get('Content-Length'),'4');assert.equal(head.headers.get('Access-Control-Allow-Origin'),null);assert.equal(await head.text(),'');
});
test('public terrain endpoint cannot write, list private keys, or traverse paths',async()=>{
  const env={TERRAIN:{get:()=>{throw Error('R2 must not be accessed');}}};
  for(const [path,method,status] of [['/v1/space/worlds/test.gz','PUT',405],['/inventory','GET',404],['/v1/space/tiles/../../secret','GET',404]]){
    assert.equal((await reader.fetch(new Request('https://assets.example'+path,{method}),env,{})).status,status);
  }
});
test('upload requires its secret and a checksum and explicitly uses Standard storage',async()=>{
  let writes=0;const env={UPLOAD_TOKEN:'test-only',TERRAIN:{put:async(key,body,options)=>{writes++;assert.equal(options.storageClass,'Standard');assert.equal(options.sha256,'a'.repeat(64));assert.equal(options.httpMetadata.contentEncoding,undefined);return {size:4};}}};
  const url='https://upload.example/v1/space/tiles/watershed/1_2_3.gz';
  assert.equal((await uploader.fetch(new Request(url,{method:'PUT',body:'data'}),env)).status,401);
  assert.equal((await uploader.fetch(new Request(url,{method:'PUT',body:'data',headers:{Authorization:'Bearer test-only'}}),env)).status,400);
  const good=await uploader.fetch(new Request(url,{method:'PUT',body:'data',headers:{Authorization:'Bearer test-only','X-Content-Sha256':'a'.repeat(64)}}),env);
  assert.equal(good.status,200);assert.equal((await good.json()).size,4);assert.equal(writes,1);
});
