import {chromium, devices} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const origin=process.env.GALLERY_ORIGIN||'http://127.0.0.1:5199';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({...devices['Pixel 7']});
const errors=[],checks=[];
page.on('pageerror',error=>errors.push(error.message));
// Exercise actual mobile navigation without downloading either 3D scene.
await page.route('**/assets/js/sketch-viewer.bundle.js*',route=>route.fulfill({contentType:'text/javascript',body:'export {};'}));
await page.route('**/assets/mirror-space/space/space.js*',route=>route.fulfill({contentType:'text/javascript',body:'export {};'}));
async function check(key){
  const name=key==='sketch-game'?'Life':'Worlds',path=key==='sketch-game'?'/assets/gallery/life.html':'/assets/mirror-space/space/';
  await page.waitForFunction(({key,path})=>{const frame=document.querySelector('iframe');return location.hash==='#'+key&&frame?.contentWindow?.location.pathname===path;},{key,path});
  assert.equal(await page.locator('#project-title').textContent(),name);
  assert.equal(await page.locator('iframe').count(),1);
  assert.equal(await page.locator('iframe').getAttribute('name'),'gallery-'+key);
  assert.equal(await page.locator('[data-project="'+key+'"]').getAttribute('aria-current'),'true');
  checks.push(key);
}
try{
  await page.goto(origin+'/gallery.html?scene=neighborhood#mirror-world');await check('mirror-world');
  await page.locator('[data-project="sketch-game"] img').tap();await check('sketch-game');
  await page.locator('[data-project="mirror-world"] img').tap();await check('mirror-world');
  await page.locator('[data-project="sketch-game"] span').tap();await check('sketch-game');
  // Reproduce conflicting history state and a restored child from another project.
  await page.evaluate(()=>{history.replaceState({galleryProject:'mirror-world'},'',location.href);document.querySelector('iframe').src='/assets/mirror-space/space/';});
  await page.waitForFunction(()=>document.querySelector('iframe').contentWindow.location.pathname==='/assets/mirror-space/space/');
  await page.locator('[data-project="sketch-game"] img').tap();await check('sketch-game');
  await page.evaluate(()=>{location.hash='mirror-world';});await check('mirror-world');
  await page.goBack();await check('sketch-game');await page.goForward();await check('mirror-world');
  await page.evaluate(()=>{history.replaceState({galleryProject:'mirror-world'},'',location.pathname+'#sketch-game');dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true}));});await check('sketch-game');
  await page.reload();await check('sketch-game');
  await page.locator('#close-project').tap();assert.equal(await page.locator('iframe').count(),0);
  await page.reload();assert.equal(await page.locator('iframe').count(),0);
  await page.locator('[data-project="sketch-game"] img').tap();await check('sketch-game');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(errors,[]);
  console.log({origin,checks,errors});
}finally{
  await fs.mkdir('artifacts',{recursive:true});await fs.writeFile('artifacts/gallery-mobile-routing.json',JSON.stringify({origin,checks,errors},null,2));await browser.close();
}
