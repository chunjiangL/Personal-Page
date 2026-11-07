import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[],missing=[],report={};
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text().slice(0,3000));});page.on('response',r=>{if(r.status()>=400)missing.push({url:r.url(),status:r.status()});});
const state=f=>f.evaluate(()=>window.__spaceDiagnostics);
async function scene(){await page.waitForSelector('iframe.mirror-canvas');const f=await page.locator('iframe.mirror-canvas').elementHandle().then(h=>h.contentFrame());await f.waitForFunction(()=>window.__spaceDiagnostics?.intro==='hold',null,{timeout:120000});return f;}
async function choose(f,name){const b=f.locator('#list button').filter({hasText:name});await b.focus();await b.click();await f.locator('#sky').focus();}
async function settled(f){await f.waitForFunction(()=>window.__spaceDiagnostics.flightProgress===0,null,{timeout:30000});}
try{
 await page.goto('http://127.0.0.1:5199/gallery.html?qa=1#mirror-world');const f=await scene(),opening=await state(f);report.openingCamera=opening.camera;
 await page.screenshot({path:'artifacts/worlds-opening.jpg',quality:93});
 await f.waitForFunction(()=>window.__spaceDiagnostics.intro==='complete',null,{timeout:60000});
 assert.deepEqual(await f.locator('#nav button').allTextContents(),['All worlds','Water','Mesh']);assert.equal((await state(f)).water,true);assert.equal((await state(f)).mesh,false);
 await choose(f,'Norvale');await page.waitForTimeout(1700);await choose(f,'Shoals');await page.waitForTimeout(1700);await f.locator('#all').click();await page.waitForTimeout(150);await settled(f);
 const overview=await state(f);report.overviewCamera=overview.camera;report.visibleWorlds=overview.planets.filter(p=>p.screen[2]>-1&&p.screen[2]<1&&Math.abs(p.screen[0])<.98&&Math.abs(p.screen[1])<.98).map(p=>p.id);
 assert.equal(overview.mode,'space');assert.equal(report.visibleWorlds.length,10,'All worlds must frame all ten worlds after interrupted flights');
 assert(Math.hypot(...overview.camera.map((v,i)=>v-opening.camera[i]))<1,'Return to the true overview, not a saved in-flight camera');
 await page.screenshot({path:'artifacts/worlds-overview.jpg',quality:93});
 const pick=overview.planets.find(p=>p.id==='skerries'),box=await f.locator('#sky').boundingBox();
 await page.mouse.click(box.x+(pick.screen[0]+1)*box.width/2,box.y+(1-pick.screen[1])*box.height/2);await f.waitForFunction(()=>window.__spaceDiagnostics.world==='skerries',null,{timeout:3000});await settled(f);report.selectAfterOverview=true;
 await f.locator('#water').click();await f.locator('#wire').click();await page.waitForTimeout(150);assert.equal((await state(f)).water,false);assert.equal((await state(f)).mesh,true);
 await page.reload();const restarted=await scene();assert.equal((await state(restarted)).water,true);assert.equal((await state(restarted)).mesh,false);report.refreshDefaults=true;
 await page.locator('#close-project').click();assert.equal(await page.locator('iframe').count(),0);report.closeDisposes=true;
 await page.locator('[data-project="sketch-game"]').click();await page.waitForSelector('iframe.life-frame');assert((await page.locator('iframe').getAttribute('src')).includes('/assets/gallery/life.html'));await page.locator('#close-project').click();
 await page.setViewportSize({width:390,height:844});await page.locator('[data-project="mirror-world"]').click();const mobile=await scene();await mobile.locator('#sky').focus();await page.keyboard.press('Escape');await page.waitForTimeout(200);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(await mobile.locator('#nav button').allTextContents(),['All worlds','Water','Mesh']);await page.screenshot({path:'artifacts/worlds-mobile.jpg',quality:92});report.mobile=true;
 assert.deepEqual(missing,[]);assert.deepEqual(errors,[]);report.errors=errors;report.missing=missing;fs.writeFileSync('artifacts/worlds-integration.json',JSON.stringify(report,null,2));console.log(report);
}finally{fs.writeFileSync('artifacts/worlds-integration-errors.json',JSON.stringify({errors,missing},null,2));await browser.close();}
