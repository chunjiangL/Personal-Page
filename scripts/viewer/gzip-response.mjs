import {gunzipSync} from 'three/addons/libs/fflate.module.js';

// Both the page and the terrain worker use this path. Native streaming remains
// the default; browser variants without Compression Streams decode identical bytes.
export async function gzipResponse(compressed) {
  const response = compressed instanceof Response ? compressed : new Response(compressed);
  let decoder;
  if (typeof DecompressionStream === 'function') {
    try { decoder = new DecompressionStream('gzip'); } catch { /* Unsupported implementation. */ }
  }
  if (decoder && response.body?.pipeThrough) return new Response(response.body.pipeThrough(decoder));
  return new Response(gunzipSync(new Uint8Array(await response.arrayBuffer())));
}
