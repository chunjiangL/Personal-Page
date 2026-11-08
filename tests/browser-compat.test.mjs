import test from 'node:test';
import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import {spawnSync} from 'node:child_process';
import {gzipResponse} from '../scripts/viewer/gzip-response.mjs';

test('fallback decompresses binary terrain and JSON exactly without native Compression Streams', async () => {
  const native = globalThis.DecompressionStream;
  try {
    globalThis.DecompressionStream = undefined;
    const original = Buffer.from(Array.from({length:131072}, (_,i) => i*79%256));
    const decoded = await (await gzipResponse(new Response(gzipSync(original)))).arrayBuffer();
    assert.deepEqual(Buffer.from(decoded), original);
    assert.deepEqual(await (await gzipResponse(gzipSync('{"scene":"bedroom"}'))).json(), {scene:'bedroom'});
    await assert.rejects(gzipResponse(new Uint8Array([1,2,3])));
  } finally { globalThis.DecompressionStream = native; }
});

test('older runtime shims preserve clone cycles, typed buffers, LOD lookup and cancellation', () => {
  const result = spawnSync(process.execPath, ['--input-type=module','-e', `
    import assert from 'node:assert/strict';
    globalThis.structuredClone=undefined;delete Array.prototype.at;delete Object.hasOwn;
    delete String.prototype.replaceAll;delete AbortSignal.prototype.throwIfAborted;
    await import('./scripts/viewer/browser-compat.mjs');
    const source={buffer:new Float32Array([1.5,2.5]),map:new Map([['x',3]])};source.self=source;
    const clone=structuredClone(source);
    assert.notEqual(clone,source);assert.equal(clone.self,clone);
    assert.notEqual(clone.buffer.buffer,source.buffer.buffer);assert.equal(clone.buffer[0],1.5);
    assert.equal(clone.map.get('x'),3);assert.equal([1,2,3].at(-1),3);
    assert.equal(Object.hasOwn({x:1},'x'),true);assert.equal('a_a'.replaceAll('_',' '),'a a');
    const c=new AbortController();c.signal.throwIfAborted();c.abort();assert.throws(()=>c.signal.throwIfAborted(),{name:'AbortError'});
  `], {encoding:'utf8'});
  assert.equal(result.status,0,result.stderr);
});
