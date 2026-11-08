// ES5 classic entry: diagnostics must run even if the demo's modules cannot.
(function () {
  var report = {version:'gallery-device-check-1', browser:navigator.userAgent, url:location.href, results:[]};
  var pending = 0, finished = false;
  var output = document.getElementById('report'), list = document.getElementById('checks');
  function write(name, state, detail) {
    report.results.push({name:name,state:state,detail:detail});
    var row = document.createElement('li'); row.textContent = state + ' · ' + name + ': ' + detail; list.appendChild(row);
    output.value = JSON.stringify(report,null,2);
  }
  function finish() { if(finished && pending===0)document.getElementById('progress').textContent='Checks complete. Please share the report.'; }
  window.addEventListener('error',function(e){write('Script error','FAIL',e.message || 'Unknown error');});
  document.getElementById('copy').onclick=function(){
    function select(){output.focus();output.select();document.getElementById('progress').textContent='Report selected. Copy and paste it into the chat.';}
    if(navigator.clipboard && navigator.clipboard.writeText)navigator.clipboard.writeText(output.value).then(function(){document.getElementById('progress').textContent='Report copied.';},select);
    else select();
  };
  function request(name,url,method,gzip){
    pending++;
    var xhr=new XMLHttpRequest(),start=Date.now(),settled=false;
    function done(state,detail){if(settled)return;settled=true;write(name,state,detail+' ('+(Date.now()-start)+' ms)');pending--;finish();}
    try{
      xhr.open(method,url,true);xhr.timeout=15000;xhr.responseType='arraybuffer';
      xhr.onload=function(){
        if(xhr.status<200||xhr.status>=300)return done('FAIL','HTTP '+xhr.status);
        var bytes=new Uint8Array(xhr.response || new ArrayBuffer(0));
        if(gzip && (bytes.length<2 || bytes[0]!==31 || bytes[1]!==139))return done('FAIL','Expected gzip bytes, received '+bytes.length+' bytes');
        done('PASS','HTTP '+xhr.status+', '+bytes.length+' bytes');
      };
      xhr.onerror=function(){done('FAIL','Network or CORS error');};
      xhr.ontimeout=function(){done('FAIL','Timed out after 15 seconds');};
      xhr.send();
    }catch(e){done('FAIL',e.message);}
  }
  document.getElementById('progress').textContent='Checking graphics and asset connections…';
  write('Browser','INFO',navigator.userAgent);
  write('Environment','INFO','secure='+!!window.isSecureContext+', touch='+navigator.maxTouchPoints+', coarse='+(window.matchMedia?matchMedia('(pointer: coarse)').matches:'unknown')+', DPR='+window.devicePixelRatio+', deviceMemory='+(navigator.deviceMemory || 'unknown'));
  write('Browser APIs','INFO','WebAssembly='+typeof WebAssembly+', crypto.subtle='+!!(window.crypto&&crypto.subtle)+', ResizeObserver='+typeof ResizeObserver+', IntersectionObserver='+typeof IntersectionObserver+', DecompressionStream='+typeof DecompressionStream);
  try{new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0]));write('WebAssembly compilation','PASS','Module compiled');}catch(e){write('WebAssembly compilation','FAIL',e.message);}
  function asyncCheck(name,start){
    pending++;var settled=false;
    function done(state,message){if(settled)return;settled=true;clearTimeout(timer);write(name,state,message);pending--;finish();}
    var timer=setTimeout(function(){done('FAIL','Timed out after 5 seconds');},5000);
    try{start().then(function(){done('PASS','Completed');},function(e){done('FAIL',e.message);});}catch(e){done('FAIL',e.message);}
  }
  asyncCheck('Asset integrity API',function(){return crypto.subtle.digest('SHA-256',new Uint8Array([1,2,3]));});
  if(window.caches)asyncCheck('Asset cache access',function(){return caches.keys();});
  else write('Asset cache access','INFO','Unavailable; demo uses uncached downloads');
  var gl;
  try{
    gl=document.getElementById('probe').getContext('webgl2',{antialias:false,stencil:true});
    if(!gl)throw new Error('WebGL 2 context creation failed');
    var dbg=gl.getExtension('WEBGL_debug_renderer_info');
    write('GPU','INFO',dbg?gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER));
    write('GPU limits','INFO','texture='+gl.getParameter(gl.MAX_TEXTURE_SIZE)+', 3D texture='+gl.getParameter(gl.MAX_3D_TEXTURE_SIZE)+', vertex attributes='+gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
    write('GPU extensions','INFO','float targets='+!!gl.getExtension('EXT_color_buffer_float')+', float filtering='+!!gl.getExtension('OES_texture_float_linear')+', parallel shader compile='+!!gl.getExtension('KHR_parallel_shader_compile'));
    function shader(type,source){var s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;}
    var vertex=shader(gl.VERTEX_SHADER,'#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}');
    var fragment=shader(gl.FRAGMENT_SHADER,'#version 300 es\nprecision highp float;out vec4 color;void main(){color=vec4(0.,1.,0.,1.);}');
    var program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
    gl.useProgram(program);var buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    var loc=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);gl.viewport(0,0,16,16);gl.drawArrays(gl.TRIANGLES,0,3);
    var px=new Uint8Array(4);gl.readPixels(8,8,1,1,gl.RGBA,gl.UNSIGNED_BYTE,px);var code=gl.getError();
    write('WebGL 2 drawing',px[1]>240&&px[0]<10&&code===0?'PASS':'FAIL','pixel='+Array.prototype.join.call(px,',')+', GL error='+code);
    gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment);
    var texture=gl.createTexture(),fb=gl.createFramebuffer();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texStorage2D(gl.TEXTURE_2D,1,gl.RGBA16F,4,4);gl.bindFramebuffer(gl.FRAMEBUFFER,fb);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
    var status=gl.checkFramebufferStatus(gl.FRAMEBUFFER);write('Half-float render target',status===gl.FRAMEBUFFER_COMPLETE?'PASS':'FAIL','Framebuffer status='+status);
    gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.deleteFramebuffer(fb);gl.deleteTexture(texture);
  }catch(e){write('WebGL 2 drawing','FAIL',e.message);}
  request('Life asset','../models/sketch-runtime/manifest.json.gz','GET',true);
  request('Worlds asset','https://worlds-assets.chunjiang-liu-richard.workers.dev/v1/space/worlds/watershed.gz','GET',true);
  request('Life script','../js/sketch-viewer.bundle.js','HEAD',false);
  request('Worlds script','../mirror-space/space/space.js','HEAD',false);
  setTimeout(function(){write('JavaScript modules',window.galleryModuleCheck?'PASS':'FAIL',window.galleryModuleCheck?'Module executed':'Module did not execute');finished=true;finish();},1500);
}());
