import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {project,dataRoot,syncMirrorSpace} from './sync-mirror-space.mjs';

await syncMirrorSpace();
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.css':'text/css; charset=utf-8','.gz':'application/gzip','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2','.woff':'font/woff','.wasm':'application/wasm'};
function inside(root,relative){const file=path.resolve(root,relative),rel=path.relative(root,file);if(rel==='..'||rel.startsWith('..'+path.sep)||path.isAbsolute(rel))throw Error('Outside preview root');return file;}
http.createServer(async(req,res)=>{
  const fail=code=>{res.writeHead(code,{'Content-Type':'text/plain'});res.end(http.STATUS_CODES[code]);};
  if(!['GET','HEAD'].includes(req.method))return fail(405);
  try{
    const url=new URL(req.url,'http://127.0.0.1:5199');
    let pathname=decodeURIComponent(url.pathname).replace(/^\/_site(?=\/)/,'');
    if(pathname.includes('\0'))return fail(400);
    let file;
    // Mount only the baked data paths. The player itself is in this repository.
    const baked=pathname.match(/^\/assets\/mirror-space\/(space\/(?:tiles|overview|context|worlds)\/.*|gallery\/.*)$/);
    if(baked)file=inside(dataRoot,baked[1]);
    else if(/^\/(assets|css|js|fonts)\//.test(pathname)){
      file=inside(project,'.'+pathname);
      // Sass outputs are generated only in _site; source assets stay live.
      try{await fs.access(file);}catch{file=inside(path.join(project,'_site'),'.'+pathname);}
    }
    else file=inside(path.join(project,'_site'),'.'+(pathname==='/'?'/index.html':pathname));
    let info=await fs.stat(file);
    if(info.isDirectory()){
      if(!pathname.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'+url.search});return res.end();}
      file=path.join(file,'index.html');info=await fs.stat(file);
    }
    if(!info.isFile())return fail(404);
    const etag='"'+info.size.toString(16)+'-'+Math.trunc(info.mtimeMs).toString(16)+'"';
    res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.setHeader('Cache-Control','no-cache');res.setHeader('ETag',etag);
    if(req.headers['if-none-match']===etag){res.writeHead(304);return res.end();}
    res.setHeader('Content-Length',info.size);res.writeHead(200);
    if(req.method==='HEAD')return res.end();
    const stream=createReadStream(file);stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  }catch(error){if(res.headersSent)return res.destroy();fail(['ENOENT','ENOTDIR'].includes(error.code)?404:error instanceof URIError?400:500);}
}).listen(5199,'127.0.0.1',()=>console.log('Local Gallery: http://127.0.0.1:5199/games.html#mirror-world'));
