import {mergeAppearance} from '@sketch/rendering/asset/appearance';

export function bedroomSurface(part, name) {
  if (part === 'scene_bedroom_workstation' && name.endsWith('_desk_graphite_laminate')) return 'desk';
  if (part === 'scene_bedroom_workstation' && name.includes('_chair_')){
    if(name.endsWith('_mesh_yarn'))return 'weave';
    if(name.endsWith('_woven_cushion'))return 'seat';
    if(/_(graphite_frame|base_nylon|upholstery_binding)$/.test(name))return 'chair';
  }
  if (part === 'scene_bedroom_wardrobe' && name.endsWith('_light_oak')) return 'wardrobe';
  if (part === 'home_sofa_body' && /_home_(sage|linen|cream)$/.test(name)) return 'sofa';
  if (part.startsWith('scene_bedroom_curtains_') && /_curtains_(blackout_|curtain_ring)/.test(name)) return 'fabric';
  if (!part.startsWith('residence_')) return;
  if (/_(?:bedroom_wall_)?plaster$/.test(name)) return 'wall';
  if (name.endsWith('_trim')) return 'trim';
  if (part === 'residence_rugs') return 'rug';
  if (part === 'residence_floor' && /_plank_/.test(name)) return 'floor';
}

// Silhouettes describe cushions and joinery. Plaster blocks that meet in
// the same plane, stitching, and individual rug stripes need no ink outline.
export function prepareBedroomInk(loaded) {
  if (!loaded.geometry.parts.has('scene_bedroom_curtains_open')) return;
  for (const [id, {partId, node}] of loaded.geometry.meshes) {
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    materials.forEach((material, slot) => {
      const kind = bedroomSurface(partId, material.name);
      if (!kind) return;
      const outline = ['sofa','trim','floor','desk','chair','seat','wardrobe'].includes(kind);
      const appearance = loaded.settings.appearance.slots[id] ??= {};
      appearance[slot] = mergeAppearance(appearance[slot], {
        sketch:{enabled:true, outlines:outline, edgeAngle:74, edgeOpacity:kind==='desk'?.36:kind==='trim'?.28:.13,
          classic:{ink:'#454a4f', pressure:kind==='wall'?0:kind==='fabric'?.10:.12, baseShade:.20, materialMix:.16,
            silhouetteWidth:kind==='desk'?.95:kind==='sofa'?.78:.58, silhouetteOpacity:kind==='floor'?.22:outline?.66:0},
          inkShading:{mode:'mixed',lightStrength:.08,structureStrength:.025,castStrength:.10}},
        edges:{width:.45, importance:outline?'subtle':'hidden'},
      });
    });
  }
}
