import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const origin=process.env.GALLERY_ORIGIN||'http://127.0.0.1:5199';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const page=await browser.newPage({viewport:{width:1000,height:700}}),errors=[],remote=[];let report={};
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());if(r.url().includes('worlds-assets.'))remote.push({url:r.url(),status:r.status()});});
try{
 if(process.env.MIRROR_RELEASE_ENTRY)await page.route('**/assets/mirror-space/space/?*',async route=>{const response=await route.fetch();await route.fulfill({response,body:await fs.readFile(process.env.MIRROR_RELEASE_ENTRY,'utf8')});});
 await page.goto(origin+'/assets/mirror-space/space/?planet=watershed&diagnostics');
 await page.waitForFunction(()=>window.__spaceDiagnostics?.lod?.ready&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:180000});
 await page.locator('#motion').click();await page.mouse.move(500,350);
 for(let i=0;i<50;i++){if(await page.evaluate(()=>window.__spaceDiagnostics.mode==='place'))break;await page.mouse.wheel(0,-160);await page.waitForTimeout(120);}
 await page.waitForFunction(()=>window.__spaceDiagnostics.native?.ready&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:180000});
 const ground=await page.evaluate(()=>window.__spaceDiagnostics);assert.equal(ground.native.cellSize,.3);assert(ground.native.resident>0);assert(ground.water);
 await page.locator('#wire').click();assert(await page.evaluate(()=>window.__spaceDiagnostics.mesh));await page.screenshot({path:'artifacts/worlds-hosted-native.jpg',quality:90});
 await page.locator('#motion').click();await page.locator('#all').click();await page.waitForTimeout(200);
 await page.waitForFunction(()=>window.__spaceDiagnostics.mode==='space'&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:40000});
 const overview=await page.evaluate(()=>window.__spaceDiagnostics),visible=overview.planets.filter(p=>Math.abs(p.screen[0])<1&&Math.abs(p.screen[1])<1&&Math.abs(p.screen[2])<1);
 assert.equal(visible.length,10);assert(remote.length>50);assert(remote.every(r=>r.status===200));assert.deepEqual(errors,[]);
 report={origin,remoteRequests:remote.length,native:ground.native,visibleWorlds:visible.map(p=>p.id),errors};console.log(report);
}finally{report.errors=errors;report.remoteRequests=remote.length;report.status=await page.locator('#status').textContent().catch(()=>null);await fs.mkdir('artifacts',{recursive:true});await fs.writeFile('artifacts/worlds-hosting.json',JSON.stringify(report,null,2));await browser.close();}
