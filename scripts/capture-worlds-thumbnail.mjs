import {chromium} from 'playwright';
import fs from 'node:fs/promises';

// Capture the actual local Worlds renderer, without its interactive controls.
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-gpu','--ignore-gpu-blocklist','--use-angle=d3d11']});
try{
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:5199/assets/mirror-space/space/?planet=watershed&diagnostics');
  await page.waitForFunction(()=>document.documentElement.dataset.orbit==='ready'&&window.__spaceDiagnostics.flightProgress===0,null,{timeout:120000});
  await page.locator('#motion').click();
  await page.addStyleTag({content:'#nav,#motion,#status,#tip,#hint,#list{visibility:hidden!important}'});
  await page.mouse.move(0,0);
  const png=await page.screenshot();
  const webp=await page.evaluate(async base64=>{
    const image=new Image();image.src='data:image/png;base64,'+base64;await image.decode();
    const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;
    canvas.getContext('2d').drawImage(image,0,0);
    return canvas.toDataURL('image/webp',.92).split(',')[1];
  },png.toString('base64'));
  if(errors.length)throw Error(errors.join('\n'));
  await fs.writeFile('assets/gallery/worlds-nebula.webp',Buffer.from(webp,'base64'));
  console.log('Captured Worlds thumbnail: 1280 × 800, '+Buffer.from(webp,'base64').length+' bytes');
}finally{await browser.close();}
