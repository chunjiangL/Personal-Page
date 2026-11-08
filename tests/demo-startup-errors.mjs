import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
try {
  for(const [path,bundle,message] of [
    ['/assets/gallery/life.html','**/sketch-viewer.bundle.js*','WebGL 2 graphics context is unavailable'],
    ['/assets/mirror-space/space/','**/space.js*','Test module failed to initialize']
  ]) {
    const page=await browser.newPage({colorScheme:'dark'});
    await page.route(bundle,r=>r.fulfill({contentType:'text/javascript',body:'throw new Error('+JSON.stringify(message)+');'}));
    await page.goto('http://127.0.0.1:5199'+path);
    await page.locator('#demo-startup-error').waitFor();
    assert.ok((await page.locator('#demo-startup-error pre').textContent()).includes(message));
    assert.ok(await page.locator('#demo-startup-error button').isVisible());
    if(path.includes('life'))assert.equal(await page.locator('#viewer-loading').isVisible(),false);
    await page.close();
  }
  console.log('Life and Worlds module failures display a readable dark error panel, actual error and Retry.');
}finally{await browser.close();}
