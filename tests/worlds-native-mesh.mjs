import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const page=await browser.newPage({viewport:{width:1000,height:540}}),errors=[],releases=[];let hold=true,report={};
await fs.mkdir('artifacts',{recursive:true});
page.on('pageerror',e=>errors.push(e.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
await page.route('**/terrain-*.gz',async route=>{if(hold)await new Promise(resolve=>releases.push(resolve));if(!page.isClosed())await route.continue().catch(()=>{});});
const sample=async()=>{const d=await page.evaluate(()=>window.__spaceDiagnostics);return {world:d.world,mode:d.mode,distance:Math.hypot(...d.localCamera),lod:d.lod,native:d.native,mesh:d.mesh,meshLayers:d.meshLayers,nativeCellPixels:d.nativeCellPixels,status:await page.locator('#status').textContent()};};
try{
 await page.goto((process.env.GALLERY_ORIGIN||'http://127.0.0.1:5199')+'/assets/mirror-space/space/?planet=meander&diagnostics');
 await page.waitForFunction(()=>window.__spaceDiagnostics?.world==='meander'&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:120000});
 await page.locator('#motion').click();await page.locator('#wire').click();await page.mouse.move(500,270);
 for(let i=0;i<35;i++){if(await page.evaluate(()=>Math.hypot(...window.__spaceDiagnostics.localCamera)<980))break;await page.mouse.wheel(0,-150);await page.waitForTimeout(80);}
 await page.waitForFunction(()=>window.__spaceDiagnostics.native?.ready,null,{timeout:180000});
 report.loading=await sample();assert.equal(report.loading.lod.ready,false);assert.equal(report.loading.native.cellSize,.3);assert(report.loading.native.resident>0);assert.equal(report.loading.meshLayers.overview,0);assert.equal(report.loading.meshLayers.display,0);
 await page.screenshot({path:'artifacts/mesh-loading-after.jpg',quality:94});console.log('Loading comparison',report.loading);
 for(let i=0;i<60;i++){if(await page.evaluate(()=>window.__spaceDiagnostics.nativeCellPixels>2.5))break;await page.mouse.wheel(0,-160);await page.waitForTimeout(100);}
 await page.waitForFunction(()=>window.__spaceDiagnostics.native?.ready&&window.__spaceDiagnostics.meshLayers.native>0&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:180000});
 report.close=await sample();assert.equal(report.close.meshLayers.overview,0);assert.equal(report.close.meshLayers.display,0);assert(report.close.nativeCellPixels>1.5);assert(report.close.native.wanted<=96);
 await page.screenshot({path:'artifacts/mesh-native-close.jpg',quality:94});console.log('Native close-up',report.close);
 await page.locator('#wire').click();hold=false;releases.splice(0).forEach(r=>r());
 await page.waitForFunction(()=>window.__spaceDiagnostics.lod?.ready,null,{timeout:240000});
 report.resumed=await sample();assert.equal(report.resumed.mesh,false);assert.equal(report.resumed.lod.waitingForNative,false);assert.equal(report.resumed.lod.shellVisible,false);assert.equal(report.resumed.lod.displayVisible,true);
 await page.locator('#motion').click();await page.locator('#all').click();await page.waitForFunction(()=>window.__spaceDiagnostics.mode==='space'&&window.__spaceDiagnostics.flightProgress===0&&window.__spaceDiagnostics.planets.every(p=>p.screen.every(v=>Math.abs(v)<1)),null,{timeout:40000});
 report.all=await page.evaluate(()=>({mode:window.__spaceDiagnostics.mode,visible:window.__spaceDiagnostics.planets.filter(p=>p.screen.every(v=>Math.abs(v)<1)).map(p=>p.id)}));assert.equal(report.all.visible.length,10);assert.deepEqual(errors,[]);console.log('PASS',report);
}finally{hold=false;releases.forEach(r=>r());report.errors=errors;report.last=await sample().catch(()=>null);await fs.writeFile('artifacts/mesh-native-check.json',JSON.stringify(report,null,2));await browser.close();}
