import {chromium, webkit, devices} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const useWebkit=process.env.BROWSER==='webkit';
const browser=await (useWebkit?webkit:chromium).launch(useWebkit?{}:{channel:'chrome',args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const page=await browser.newPage({...devices['iPhone 13']});
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
try{
  await page.goto((process.env.GALLERY_ORIGIN||'http://127.0.0.1:5199')+'/assets/gallery/life.html?scene=bedroom&qa=1');
  await page.waitForFunction(()=>window.__lifeStage?.renderedFrames>6,null,{timeout:240000});
  const report=await page.evaluate(async()=>{
    const stage=window.__lifeStage,renderer=stage.renderer,slider=document.querySelector('#light-time');
    const ratio=renderer.getPixelRatio(),start=stage.renderedFrames,origin=performance.timeOrigin;
    const frames=async n=>{for(let i=0;i<n;i++)await new Promise(requestAnimationFrame);};
    const samples=[];
    for(let i=0;i<36;i++){
      slider.value=String(600+i*5);slider.dispatchEvent(new Event('input',{bubbles:true}));
      await frames(1);
      samples.push({ratio:renderer.getPixelRatio(),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles});
    }
    slider.dispatchEvent(new Event('pointerup'));await frames(3);
    const settledRatio=renderer.getPixelRatio(),canvas=renderer.domElement;
    canvas.dispatchEvent(new PointerEvent('pointerdown',{pointerId:1,pointerType:'touch',button:0,clientX:150,clientY:150}));
    const cameraBefore=stage.camera.position.toArray();
    for(let i=0;i<24;i++){
      canvas.dispatchEvent(new PointerEvent('pointermove',{pointerId:1,pointerType:'touch',button:0,clientX:160+i,clientY:150}));
      await frames(1);
    }
    const orbitRatio=renderer.getPixelRatio(),cameraAfter=stage.camera.position.toArray();
    canvas.dispatchEvent(new PointerEvent('pointerup',{pointerId:1,pointerType:'touch'}));await frames(3);
    return {ratio,settledRatio,orbitRatio,restoredRatio:renderer.getPixelRatio(),samples,cameraBefore,cameraAfter,frames:stage.renderedFrames-start,sameDocument:origin===performance.timeOrigin,gl:renderer.getContext().getError()};
  });
  assert.ok(report.samples.every(v=>v.ratio<=1));
  assert.equal(report.settledRatio,report.ratio);assert.equal(report.restoredRatio,report.ratio);
  assert.ok(report.orbitRatio<=1);assert.notDeepEqual(report.cameraBefore,report.cameraAfter);
  assert.ok(report.frames>=60&&report.sameDocument);assert.equal(report.gl,0);assert.deepEqual(errors,[]);
  await fs.mkdir('artifacts',{recursive:true});
  await fs.writeFile('artifacts/life-touch-motion.json',JSON.stringify(report,null,2));
  await page.screenshot({path:'artifacts/life-touch-motion.jpg'});
  console.log({frames:report.frames,restoredRatio:report.restoredRatio,moving:report.samples.at(-1),errors});
}finally{await browser.close();}
