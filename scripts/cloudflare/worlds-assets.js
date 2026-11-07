const allowedOrigins=new Set(['https://chunjiangliu.com','https://www.chunjiangliu.com','https://chunjiangl.github.io','http://127.0.0.1:5199','http://localhost:5199']);
const keyPattern=/^v1\/(space\/(tiles|overview|context|worlds)\/[a-z0-9_.\/-]+|gallery\/[a-z0-9-]+\/full\/[a-z0-9_.-]+)$/;

function cors(response,request){
  const headers=new Headers(response.headers),origin=request.headers.get('Origin');
  if(allowedOrigins.has(origin))headers.set('Access-Control-Allow-Origin',origin);
  headers.set('Vary','Origin');headers.set('Access-Control-Expose-Headers','Content-Length,ETag,Content-Range');
  headers.set('Access-Control-Allow-Methods','GET,HEAD,OPTIONS');headers.set('Access-Control-Allow-Headers','Range');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
}
export default {
  async fetch(request,env,ctx){
    if(request.method==='OPTIONS')return cors(new Response(null,{status:204}),request);
    if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});
    const key=new URL(request.url).pathname.slice(1);
    if(!keyPattern.test(key)||key.includes('..'))return cors(new Response('Not found',{status:404}),request);
    const cacheKey=new Request(request.url,{method:'GET'}),cache=caches.default;
    if(!request.headers.has('Range')){
      const cached=await cache.match(cacheKey);
      if(cached)return cors(new Response(request.method==='HEAD'?null:cached.body,cached),request);
    }
    const object=request.method==='HEAD'?await env.TERRAIN.head(key):await env.TERRAIN.get(key,{range:request.headers});
    if(!object)return cors(new Response('Not found',{status:404}),request);
    const headers=new Headers();object.writeHttpMetadata(headers);
    // These gzip files are decoded by the terrain loader, not HTTP middleware.
    headers.delete('Content-Encoding');headers.set('ETag',object.httpEtag);
    headers.set('Cache-Control','public, max-age=31536000, immutable');headers.set('Accept-Ranges','bytes');
    let status=200,length=object.size;
    if(object.range){const start=object.range.offset??object.size-object.range.suffix;length=object.range.length??object.range.suffix;headers.set('Content-Range',`bytes ${start}-${start+length-1}/${object.size}`);status=206;}
    headers.set('Content-Length',String(length));
    const response=new Response(request.method==='HEAD'?null:object.body,{status,headers});
    if(request.method==='GET'&&status===200)ctx.waitUntil(cache.put(cacheKey,response.clone()));
    return cors(response,request);
  }
};
