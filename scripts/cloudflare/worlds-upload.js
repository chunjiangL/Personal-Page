// Temporary authenticated upload endpoint. Remove this Worker after release.
const keyPattern=/^v1\/(space\/(tiles|overview|context|worlds)\/[a-z0-9_.\/-]+|gallery\/[a-z0-9-]+\/full\/[a-z0-9_.-]+)$/;
export default {
  async fetch(request,env){
    if(!env.UPLOAD_TOKEN||request.headers.get('Authorization')!==`Bearer ${env.UPLOAD_TOKEN}`)return new Response('Unauthorized',{status:401});
    const url=new URL(request.url),key=url.pathname.slice(1);
    if(request.method==='GET'&&key==='inventory'){
      const list=await env.TERRAIN.list({limit:1000,cursor:url.searchParams.get('cursor')||undefined,include:['customMetadata']});
      return Response.json({objects:list.objects.map(o=>({key:o.key,size:o.size,sha256:o.customMetadata?.sha256})),cursor:list.truncated?list.cursor:null});
    }
    if(request.method!=='PUT'||!keyPattern.test(key)||key.includes('..'))return new Response('Invalid upload',{status:400});
    const sha256=request.headers.get('X-Content-Sha256');
    if(!/^[a-f0-9]{64}$/.test(sha256||''))return new Response('Missing checksum',{status:400});
    const object=await env.TERRAIN.put(key,request.body,{sha256,storageClass:'Standard',customMetadata:{sha256},httpMetadata:{contentType:key.endsWith('.json')?'application/json':'application/gzip',cacheControl:'public, max-age=31536000, immutable'}});
    return Response.json({key,size:object.size,sha256});
  }
};
