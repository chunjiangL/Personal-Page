import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
try {
 for (const blocked of [false,true]) {
 const page=await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/manifest.json.gz',r=>r.fulfill({contentType:'application/gzip',body:Buffer.from([31,139,8,0])}));
 await page.route('https://worlds-assets.*/**',r=>blocked?r.abort():r.fulfill({headers:{'Access-Control-Allow-Origin':'*'},contentType:'application/gzip',body:Buffer.from([31,139,8,0])}));
 if(blocked)await page.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=function(){return null;};});
 await page.goto('http://127.0.0.1:5199/assets/gallery/device-check.html');
 await page.waitForFunction(()=>document.querySelector('#progress').textContent.startsWith('Checks complete'),null,{timeout:20000});
 const report=JSON.parse(await page.locator('#report').inputValue());
 assert.equal(report.results.find(r=>r.name==='JavaScript modules').state,'PASS');
 assert.equal(report.results.find(r=>r.name==='WebGL 2 drawing').state,blocked?'FAIL':'PASS');
 assert.equal(report.results.find(r=>r.name==='Worlds asset').state,blocked?'FAIL':'PASS');
 assert.equal(report.results.find(r=>r.name==='Life asset').state,'PASS');
 assert.deepEqual(errors,[]);console.log({blocked,results:report.results});await page.close();
 }
}finally{await browser.close();}
