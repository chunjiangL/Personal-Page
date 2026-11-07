import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
const root=path.resolve(process.env.MIRROR_DEMO_SITE||'F:/MirrorWorld-gallery-lab/planet-1km-native/site'),files=[];
async function walk(relative){for(const e of await fs.readdir(path.join(root,relative),{withFileTypes:true})){const p=relative+'/'+e.name;if(e.isDirectory())await walk(p);else files.push(p);}}
for(const dir of ['tiles','overview','context','worlds'])await walk('space/'+dir);
const worlds=JSON.parse(await fs.readFile(path.join(root,'space/worlds.json'),'utf8'));
for(const world of worlds)await walk('gallery/'+world.id+'/full');
const manifest=[];let next=0;
await Promise.all(Array.from({length:4},async()=>{while(next<files.length){const relative=files[next++],file=path.join(root,relative),size=(await fs.stat(file)).size;const hash=createHash('sha256');for await(const chunk of createReadStream(file))hash.update(chunk);manifest.push({key:'v1/'+relative,file,size,sha256:hash.digest('hex')});}}));
manifest.sort((a,b)=>a.key.localeCompare(b.key));await fs.mkdir('.deploy-state',{recursive:true});await fs.writeFile('.deploy-state/terrain-manifest.json',JSON.stringify(manifest));
console.log(JSON.stringify({files:manifest.length,bytes:manifest.reduce((n,f)=>n+f.size,0),largest:Math.max(...manifest.map(f=>f.size))}));
