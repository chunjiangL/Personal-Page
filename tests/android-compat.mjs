import {chromium,devices} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const old=process.env.LEGACY_CHROMIUM;
const browser=await chromium.launch({...(old?{executablePath:old}:{channel:'chrome'}),headless:true,args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const context=await browser.newContext({...devices['Pixel 7']});
const errors=[],report={version:await browser.version(),scenes:[]};
// Exercise the same published payloads without spending R2 request allowance.
await context.route('https://worlds-assets.chunjiang-liu-richard.workers.dev/v1/**',async route=>{
  const file=new URL(route.request().url()).pathname.slice(4);
  await route.fulfill({headers:{'Access-Control-Allow-Origin':'*'},contentType:file.endsWith('.json')?'application/json':'application/gzip',body:await fs.readFile('F:/MirrorWorld-gallery-lab/planet-1km-native/site/'+file)}).catch(()=>{});
});
if(process.env.MISSING_APIS)await context.addInitScript(()=>{
  globalThis.structuredClone=undefined;delete Array.prototype.at;delete Object.hasOwn;
  delete String.prototype.replaceAll;delete AbortSignal.prototype.throwIfAborted;
  globalThis.DecompressionStream=undefined;
});
const page=await context.newPage();
page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.message);});
page.on('console',m=>{if(m.type()==='error'){errors.push(m.text());console.log('CONSOLE ERROR',m.text().slice(0,600));}});
page.on('crash',()=>errors.push('render process crash'));
try {
  for(const scene of ['neighborhood','bedroom']) {
    await page.goto('http://127.0.0.1:5199/gallery.html?qa=1&scene='+scene+'#sketch-game');
    // Scroll the embedded Life canvas into view so its deliberate visibility
    // suspension does not turn a loading test into a hidden-renderer test.
    await page.evaluate(()=>document.getElementById('gallery-player').scrollIntoView());
    await page.waitForFunction(()=>document.querySelector('iframe')?.contentWindow.__lifeStage?.renderedFrames>5,null,{timeout:240000});
    const state=await page.evaluate(()=>new Promise(resolve=>{
      const s=document.querySelector('iframe').contentWindow.__lifeStage,prior=s.onRender;
      s.onRender=()=>{prior();s.onRender=prior;
        const gl=s.renderer.getContext(),px=new Uint8Array(32*32*4);
        gl.readPixels(gl.drawingBufferWidth/2-16,gl.drawingBufferHeight/2-16,32,32,gl.RGBA,gl.UNSIGNED_BYTE,px);
        const colors=new Set();for(let i=0;i<px.length;i+=4)colors.add(px.slice(i,i+4).join(','));
        resolve({frames:s.renderedFrames,colors:colors.size,glError:gl.getError(),lost:gl.isContextLost()});
      };s.dirty=true;
    }));
    assert.ok(state.colors>4,JSON.stringify(state));assert.equal(state.glError,0);assert.equal(state.lost,false);
    report.scenes.push({scene,...state});console.log(report.scenes[report.scenes.length-1]);
  }
  await page.goto('http://127.0.0.1:5199/gallery.html?qa=1#mirror-world');
  await page.waitForFunction(()=>document.querySelector('iframe')?.contentDocument.documentElement.dataset.ready==='true',null,{timeout:180000});
  await page.waitForFunction(()=>document.querySelector('iframe').contentWindow.__spaceDiagnostics?.intro==='complete',null,{timeout:90000});
  const state=await page.evaluate(()=>{
    const w=document.querySelector('iframe').contentWindow,c=w.document.getElementById('sky'),gl=c.getContext('webgl2');
    return {world:w.__spaceDiagnostics.world,planets:w.__spaceDiagnostics.planets.length,lost:gl.isContextLost(),glError:gl.getError(),size:[c.width,c.height]};
  });
  assert.equal(state.planets,10);assert.equal(state.lost,false);assert.equal(state.glError,0);assert.ok(state.size.every(v=>v>0));
  report.scenes.push({scene:'worlds',...state});console.log(report.scenes[report.scenes.length-1]);
  await page.screenshot({path:'artifacts/android-worlds-'+(old?'legacy':'fallback')+'.png'});
  assert.deepEqual(errors,[]);
}finally{
  await fs.writeFile('artifacts/android-compat-'+(old?'legacy':'fallback')+'.json',JSON.stringify({...report,errors},null,2));await browser.close();
}
