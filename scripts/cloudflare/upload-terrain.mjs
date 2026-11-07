import fs from 'node:fs/promises';
const endpoint=process.argv[2],secretFile=process.argv[3];
if(!endpoint?.startsWith('https://')||!secretFile)throw Error('Usage: node scripts/cloudflare/upload-terrain.mjs <upload-worker-url> <local-secret-file>');
const token=(await fs.readFile(secretFile,'utf8')).trim(),manifest=JSON.parse(await fs.readFile('.deploy-state/terrain-manifest.json','utf8'));
const byteLimit=9_950_000_000,uploadLimit=100_000;
if(manifest.reduce((n,f)=>n+f.size,0)>byteLimit||manifest.length>uploadLimit)throw Error('Release exceeds the zero-budget storage or upload cap');
const auth={Authorization:`Bearer ${token}`};
async function inventory(){const result=new Map();let cursor;do{const url=new URL('inventory',endpoint.endsWith('/')?endpoint:endpoint+'/');if(cursor)url.searchParams.set('cursor',cursor);const res=await fetch(url,{headers:auth});if(!res.ok)throw Error('Inventory failed: '+res.status);const page=await res.json();for(const item of page.objects)result.set(item.key,item);cursor=page.cursor;}while(cursor);return result;}
const existing=await inventory(),queue=manifest.filter(f=>{const old=existing.get(f.key);return old?.size!==f.size||old?.sha256!==f.sha256;});
if(queue.some(f=>existing.has(f.key)))throw Error('An immutable object differs from the release; refusing to overwrite cached terrain');
const priority=f=>/\/space\/(worlds|overview)\//.test(f.key)?0:/\/(scene\.json|mineral\.rgba\.gz|index\.json|height\.gz)$/.test(f.key)?1:f.key.includes('/watershed/')?2:f.key.includes('/gallery/')?3:4;
queue.sort((a,b)=>priority(a)-priority(b)||a.key.localeCompare(b.key));
const expected=new Map([...existing].map(([key,o])=>[key,o.size]));for(const file of manifest)expected.set(file.key,file.size);
if([...expected.values()].reduce((n,size)=>n+size,0)>byteLimit)throw Error('Existing objects plus this release exceed the zero-budget storage cap');
let next=0,done=manifest.length-queue.length,bytes=manifest.filter(f=>!queue.includes(f)).reduce((n,f)=>n+f.size,0),failure=null;
const timer=setInterval(()=>console.log(JSON.stringify({done,total:manifest.length,bytes,remaining:queue.length-next})),15000);
try{
 await Promise.all(Array.from({length:64},async()=>{while(next<queue.length&&!failure){const file=queue[next++];try{const body=await fs.readFile(file.file);let ok=false;for(let attempt=0;attempt<6;attempt++){
  try{const res=await fetch(new URL(file.key,endpoint.endsWith('/')?endpoint:endpoint+'/'),{method:'PUT',headers:{...auth,'Content-Type':'application/octet-stream','X-Content-Sha256':file.sha256},body,signal:AbortSignal.timeout(180000)});if(res.ok){const check=await res.json();if(check.size!==file.size||check.sha256!==file.sha256)throw Error('Upload verification mismatch');ok=true;break;}if(res.status<500&&res.status!==429)throw Error('Upload rejected: '+res.status);await res.arrayBuffer();}catch(e){if(attempt===5)throw e;}
  await new Promise(r=>setTimeout(r,Math.min(20000,1000*2**attempt)));
 }if(!ok)throw Error('Upload retries exhausted');done++;bytes+=file.size;}catch(e){failure=Error(file.key+': '+e.message);}}}));
 if(failure)throw failure;
 const remote=await inventory();const missing=manifest.filter(f=>remote.get(f.key)?.size!==f.size||remote.get(f.key)?.sha256!==f.sha256);
 if(missing.length)throw Error('Final inventory mismatch: '+missing.length);
 const report={files:manifest.length,bytes,verified:true,finished:new Date().toISOString()};await fs.writeFile('.deploy-state/upload-result.json',JSON.stringify(report,null,2));console.log(report);
}finally{clearInterval(timer);}
