import {chromium,webkit,devices} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const wk=process.env.BROWSER==='webkit',browser=await(wk?webkit:chromium).launch(wk?{}:{channel:'chrome',args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const page=await browser.newPage({...devices['iPhone 14 Pro']});
const errors=[],requests=[],samples=[],report=[];let timer;
page.on('pageerror',e=>errors.push(e.message));page.on('crash',()=>errors.push('render-process-crash'));
page.on('console',m=>{if(m.type()==='error'){errors.push(m.text());console.log('BROWSER ERROR',m.text());}});
page.on('request',r=>requests.push(r.url()));
try{
 if(!wk){const c=await page.context().newCDPSession(page);timer=setInterval(async()=>{try{samples.push(await c.send('Runtime.getHeapUsage'));}catch{}},500);}
 await page.goto((process.env.GALLERY_ORIGIN||'http://127.0.0.1:5199')+'/assets/gallery/life.html?qa=1&scene=neighborhood');
 for(const scene of ['neighborhood','bedroom','neighborhood']){
  if(report.length)await page.locator('[data-scene="'+scene+'"]').click();
  await page.waitForFunction(scene=>{const d=JSON.parse(document.querySelector('#viewer-diagnostics')?.textContent||'{}');return d.scene===scene&&d.frames>5&&document.querySelector('#viewer-loading').hidden;},scene,{timeout:240000});
  await page.waitForTimeout(1500);
  const state=await page.evaluate(()=>new Promise(resolve=>{
   const s=window.__lifeStage,prior=s.onRender;
   s.onRender=()=>{
    prior?.();s.onRender=prior;
    const buffers=new Set();s.scene.traverse(n=>{for(const a of Object.values(n.geometry?.attributes||{})){const arr=a.array||a.data?.array;if(arr)buffers.add(arr.buffer);}if(n.geometry?.index)buffers.add(n.geometry.index.array.buffer);});
    const gl=s.renderer.getContext(),w=gl.drawingBufferWidth,h=gl.drawingBufferHeight,px=new Uint8Array(64*64*4);
    gl.readPixels(Math.floor(w/2)-32,Math.floor(h/2)-32,64,64,gl.RGBA,gl.UNSIGNED_BYTE,px);
    const colors=new Set();for(let i=0;i<px.length;i+=4)colors.add(px.slice(i,i+4).join(','));
    resolve({frames:s.renderedFrames,geometryBytes:[...buffers].reduce((n,b)=>n+b.byteLength,0),atlasBytes:s.loaded.geometry.structure.texture.image.data.byteLength,mobileMeshes:[...s.loaded.geometry.meshes.values()].filter(r=>r.node.geometry.userData.galleryMobileGeometry).length,colors:colors.size,gl:gl.getError(),contextLost:gl.isContextLost(),image:s.renderer.domElement.toDataURL()});
   };s.dirty=true;
  }));
  assert.ok(state.mobileMeshes>0);assert.ok(state.atlasBytes<=16);assert.ok(state.colors>4);assert.equal(state.gl,0);assert.equal(state.contextLost,false);
  await fs.mkdir('artifacts',{recursive:true});await fs.writeFile(`artifacts/life-mobile-${wk?'webkit':'chrome'}-${scene}.png`,Buffer.from(state.image.split(',')[1],'base64'));delete state.image;
  report.push({scene,...state});console.log(report.at(-1));
  if(scene==='bedroom'){
   await page.locator('[data-object="monitor"]').click();await page.waitForFunction(()=>document.querySelector('#sketch-viewer').classList.contains('is-inspecting'));
   // Switching from an open inspector must also stop its animation loop and
   // release the old context, rather than retaining a second hidden renderer.
   await page.waitForTimeout(1000);
  }
 }
 assert.ok(!requests.some(u=>/\/prepared-compact\/|\/startup\//.test(u)));
 assert.deepEqual(errors,[]);
 console.log({peakJSAndBuffers:Math.max(0,...samples.map(s=>s.usedSize+(s.backingStorageSize||0))),errors});
}finally{
 clearInterval(timer);await fs.mkdir('artifacts',{recursive:true});await fs.writeFile(`artifacts/life-mobile-budget-${wk?'webkit':'chrome'}.json`,JSON.stringify({report,requests,samples,errors},null,2));await browser.close();
}
