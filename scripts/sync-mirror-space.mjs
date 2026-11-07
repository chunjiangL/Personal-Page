import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

export const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const dataRoot=path.resolve(process.env.MIRROR_DEMO_SITE||'F:/MirrorWorld-gallery-lab/planet-1km-native/site');
export async function syncMirrorSpace(){
  const output=path.join(project,'assets/mirror-space/space');
  await fs.mkdir(output,{recursive:true});
  for(const name of ['index.html','space.js','mesh-worker.js','worlds.json'])await fs.copyFile(path.join(dataRoot,'space',name),path.join(output,name));
  const generated=path.join(project,'_site/games.html');
  const source=await fs.readFile(path.join(project,'_data/games.yml'),'utf8');
  const world=source.split('- id: mirror-world')[1]?.split('\n- id:')[0];
  const viewer=world?.match(/^\s+viewer:\s*(\S+)/m)?.[1],thumbnail=world?.match(/^\s+thumbnail:\s*(\S+)/m)?.[1];
  if(!viewer||!thumbnail)throw Error('Worlds viewer or thumbnail path missing');
  const thumbnailVersion=createHash('sha256').update(await fs.readFile(path.join(project,thumbnail))).digest('hex').slice(0,12);
  // Refresh the already-rendered local page; production Jekyll reads games.yml.
  let html=await fs.readFile(generated,'utf8');
  if(!/data-project="mirror-world"\s+data-view="[^"]*"/.test(html))throw Error('Build the Gallery page into _site first');
  html=html.replace(/data-project="mirror-world"\s+data-view="[^"]*"/,`data-project="mirror-world" data-view="${viewer}"`);
  html=html.replace(/(data-project="mirror-world"[\s\S]*?<img\s+src=")[^"]*"/,`$1${thumbnail}?v=${thumbnailVersion}"`);
  html=html.replace(/(assets\/gallery\/gallery\.js\?v=)[^"\s]+/,'$1mirror-space-local-20261107');
  html=html.replace(/(assets\/css\/games\.css\?v=)[^"\s]+/,'$1mirror-space-local-20261107');
  await fs.writeFile(generated,html);
  console.log('Synced the local Worlds player; baked terrain stays in '+dataRoot);
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await syncMirrorSpace();
