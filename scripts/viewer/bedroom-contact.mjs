import * as T from 'three';

// Both maps use the same static furniture and only need positions. Pack the
// original triangles once, in room coordinates, for one draw per sun update.
function casterGeometry(geometry, origin) {
  const sources=[...geometry.meshes.values()].filter(({partId})=>/^scene_bedroom_(?:workstation|bed|wardrobe)$/.test(partId));
  const ranges=sources.map(({node})=>{
    const {index,attributes,drawRange}=node.geometry;
    const end=Math.min(index?.count??attributes.position.count,drawRange.start+drawRange.count);
    return {node,position:attributes.position,index,start:drawRange.start,count:end-drawRange.start};
  });
  const vertices=ranges.reduce((total,mesh)=>total+mesh.position.count,0);
  const positions=new Float32Array(3*vertices);
  const indices=new (vertices>65535?Uint32Array:Uint16Array)(ranges.reduce((total,mesh)=>total+mesh.count,0));
  const point=new T.Vector3();
  let base=0,offset=0;
  for(const {node,position,index,start,count} of ranges){
    for(let i=0;i<position.count;i++)
      point.fromBufferAttribute(position,i).applyMatrix4(node.matrixWorld).sub(origin).toArray(positions,(base+i)*3);
    for(let i=start;i<start+count;i++)indices[offset++]=base+(index?index.getX(i):i);
    base+=position.count;
  }
  const result=new T.BufferGeometry();
  result.setAttribute('position',new T.BufferAttribute(positions,3));
  result.setIndex(new T.BufferAttribute(indices,1));
  return result;
}

// Static furniture supplies a softly filtered floor contact map and a separate
// sun map fitted to this room. Neither pass draws helper meshes in the viewer.
export class BedroomCasterMaps {
  constructor(stage,origin) {
    this.renderer=stage.renderer;
    this.contact=new T.WebGLRenderTarget(256,256,{
      generateMipmaps:true,minFilter:T.LinearMipmapLinearFilter,magFilter:T.LinearFilter,
    });
    this.contact.texture.name='bedroom furniture clearance';
    this.sun=new T.WebGLRenderTarget(512,512);
    this.sun.depthTexture=new T.DepthTexture(512,512,T.UnsignedShortType);
    this.sun.depthTexture.name='bedroom furniture sun depth';
    this.sunMatrix=new T.Matrix4();
    this.direction=new T.Vector3();
    this.centre=new T.Vector3(2.4,1.24,1.30);
    this.sunCamera=new T.OrthographicCamera(-2.90,2.90,2.90,-2.90,.25,12);
    this.material=new T.ShaderMaterial({
      side:T.DoubleSide,toneMapped:false,
      vertexShader:`varying float height;
        void main(){vec4 p=modelMatrix*vec4(position,1.);
          height=p.y;gl_Position=projectionMatrix*viewMatrix*p;}`,
      fragmentShader:`varying float height;
        void main(){gl_FragColor=vec4(1.-smoothstep(.015,.17,height),
          1.-smoothstep(.10,.64,height),1.-smoothstep(.55,1.55,height),1.);}`,
    });
    this.scene=new T.Scene();
    const geometry=stage.loaded.geometry;
    geometry.wrapper.updateWorldMatrix(true,true);
    this.geometry=casterGeometry(geometry,origin);
    this.scene.add(new T.Mesh(this.geometry,this.material));
    const floorCamera=new T.OrthographicCamera(-1.70,1.70,2,-2,.03,3.4);
    floorCamera.up.set(0,0,1);floorCamera.position.set(2.4,-.35,1.30);floorCamera.lookAt(2.4,1,1.30);
    this.render(this.contact,floorCamera);
  }

  render(target,camera) {
    const r=this.renderer, previous=r.getRenderTarget();
    const color=r.getClearColor(new T.Color()), alpha=r.getClearAlpha();
    const shadowUpdate=r.shadowMap.needsUpdate;
    try{
      r.shadowMap.needsUpdate=false;r.setRenderTarget(target);r.setClearColor(0x000000,1);
      r.clear();r.render(this.scene,camera);
    }finally{
      r.setRenderTarget(previous);r.setClearColor(color,alpha);r.shadowMap.needsUpdate=shadowUpdate;
    }
  }

  setSun(direction) {
    if(direction.distanceToSquared(this.direction)<1e-10)return;
    this.direction.copy(direction);
    const camera=this.sunCamera;
    camera.position.copy(this.centre).addScaledVector(direction,5.5);
    camera.lookAt(this.centre);camera.updateMatrixWorld();
    this.sunMatrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
    this.render(this.sun,camera);
  }

  dispose() {
    this.contact.dispose();this.sun.dispose();this.material.dispose();this.geometry.dispose();this.scene.clear();
  }
}
