// Resume compressed assets at verified HTTP byte boundaries. A lost connection
// retries only the current segment; the caller still verifies the whole SHA-256.
export async function downloadBytes(url,{rangeSize=0,timeoutMs=25000,retries=2,cache,onProgress=()=>{}}={}){
 let offset=0,total=0,output;
 async function part(){
  for(let attempt=0;;attempt++){
   const controller=new AbortController();let timer,reader,expired=false,rejectTimeout;
   const timeout=new Promise((_,reject)=>{rejectTimeout=reject;});
   function activity(){clearTimeout(timer);timer=setTimeout(()=>{
    expired=true;controller.abort();void reader?.cancel().catch(()=>{});
    rejectTimeout(Error('No download progress for '+Math.round(timeoutMs/1000)+' seconds'));
   },timeoutMs);}
   onProgress({url,loaded:offset,total,attempt,state:attempt?'retrying':'downloading'});activity();
   try{
    return await Promise.race([timeout,(async()=>{
     const headers=rangeSize?{Range:`bytes=${offset}-${offset+rangeSize-1}`} : undefined;
     const response=await fetch(url,{headers,signal:controller.signal,...(cache?{cache}:{})});
     if(!response.ok){const e=Error('HTTP '+response.status);e.retryable=response.status===408||response.status===429||response.status>=500;throw e;}
     const range=response.status===206?/^bytes (\d+)-(\d+)\/(\d+)$/.exec(response.headers.get('Content-Range')||''):null;
     if(response.status===206&&(!range||Number(range[1])!==offset||!rangeSize))throw Error('Invalid download byte range');
     const full=response.status===200;
     if(!full&&!range)throw Error('Unexpected download response');
     const expected=range?Number(range[2])-Number(range[1])+1:Number(response.headers.get('Content-Length'))||0;
     const size=range?Number(range[3]):expected;
     if(range&&(Number(range[2])<offset||Number(range[2])>=size||(total&&total!==size)))throw Error('Asset size changed during download');
     reader=response.body?.getReader();let bytes;
     if(reader){
      const chunks=[],allocated=expected?new Uint8Array(expected):null;let length=0;
      while(true){const {value,done}=await reader.read();if(expired)throw Error('Download cancelled');if(done)break;
       if(allocated){if(length+value.byteLength>expected)throw Error('Download exceeds declared length');allocated.set(value,length);}else chunks.push(value);
       length+=value.byteLength;activity();onProgress({url,loaded:(full?0:offset)+length,total:size,attempt,state:'downloading'});
      }
      if(expected&&length!==expected)throw Error('Incomplete download segment');
      bytes=allocated||new Uint8Array(length);if(!allocated){let at=0;for(const chunk of chunks){bytes.set(chunk,at);at+=chunk.byteLength;}}
     }else bytes=new Uint8Array(await response.arrayBuffer());
     if(expected&&bytes.byteLength!==expected)throw Error('Incomplete download segment');
     return {bytes,full,size};
    })()]);
   }catch(error){
    controller.abort();void reader?.cancel().catch(()=>{});
    if(attempt>=retries||error.retryable===false)throw Error('Could not download '+new URL(url).pathname.split('/').slice(-2).join('/')+': '+error.message);
   }finally{clearTimeout(timer);}
  }
 }
 while(true){
  const result=await part();
  // Some servers ignore Range and send the complete object. Never append that
  // response to previously downloaded bytes.
  if(result.full){onProgress({url,loaded:result.bytes.length,total:result.bytes.length,state:'downloaded'});return result.bytes.buffer;}
  total=result.size;output??=new Uint8Array(total);output.set(result.bytes,offset);offset+=result.bytes.length;
  if(offset===total){onProgress({url,loaded:offset,total,state:'downloaded'});return output.buffer;}
 }
}

// Storage is optional. A browser storage operation that never settles must not
// prevent a network download (some embedded browsers fail without rejecting).
export function optionalCache(operation,timeoutMs=2000){
 let timer;
 return Promise.race([Promise.resolve().then(operation).catch(()=>undefined),new Promise(resolve=>{timer=setTimeout(resolve,timeoutMs);})]).finally(()=>clearTimeout(timer));
}
