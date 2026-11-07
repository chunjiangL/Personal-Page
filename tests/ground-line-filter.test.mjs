import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {adaptGroundSurfaceSource,pavementFilterGLSL} from '../scripts/viewer/ground-line-filter.mjs';

// Execute the scalar shader formula itself against a supersampled reference.
const scalarJS=pavementFilterGLSL.replace(/float (\w+)\(/g,'function $1(').replace(/float /g,'var ').replace(/var (\w+)(?=[,)])/g,'$1');
const coverage=new Function('floor','min','max','clamp',scalarJS+';return galleryJointCoverage;')(Math.floor,Math.min,Math.max,(v,a,b)=>Math.max(a,Math.min(b,v)));

test('filtered slab lines agree with supersampling across positive, negative and stagger boundaries',()=>{
 const width=.008/1.2,samples=32768;
 for(const center of [-4.999,-.51,-.001,0,.009,.499,.999,7.004])for(const footprint of [.002,.04,.19,.48,1.2]){
  let covered=0;
  for(let i=0;i<samples;i++){const x=center+((i+.5)/samples-.5)*footprint,f=x-Math.floor(x);covered+=Number(f<width||f>1-width);}
  assert.ok(Math.abs(coverage(center,width,footprint)-covered/samples)<.0001,`${center}, ${footprint}`);
 }
});

test('unresolved joints preserve finite coverage instead of widening into black bands',()=>{
 for(const center of [-10.001,0,.37,100.99]){
  assert.ok(Math.abs(coverage(center,.01,1)-.02)<1e-10);
  assert.ok(Math.abs(coverage(center,.01,4)-.02)<1e-10);
 }
});

test('adapter preserves the original ground pen and shadow response and rejects source drift',async()=>{
 const source=await fs.readFile((process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame')+'/src/apps/apartment/ground-surface.ts','utf8');
 const normalized=source.replaceAll('\r\n','\n'),adapted=adaptGroundSurfaceSource(source),marker=' // Compare shadowed and unoccluded N.L.';
 assert.equal(adapted.slice(adapted.indexOf(marker)),normalized.slice(normalized.indexOf(marker)));
 assert.ok(adapted.includes('apartmentWash=mix(apartmentWash,apartmentWash*vec3(.53,.52,.48),joint*.46);'));
 assert.ok(!adapted.includes('fwidth(jointDistance)'));
 assert.throws(()=>adaptGroundSurfaceSource(source.replace('vec2 slabP=groundP','vec2 renamed=groundP')),/Original pavement/);
});
