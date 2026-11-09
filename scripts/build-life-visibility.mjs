import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';

// Extend the immutable, already-published runtime. LIFE's source has advanced
// since its cached geometry was baked; never bypass its source-fingerprint gate
// or silently mix those new assets into this performance-only release.
const revision='30ff0e8e52a39457aee92beb001634dc448da34d';
const base=execFileSync('git',['show',revision+':assets/js/sketch-viewer.bundle.js'],{maxBuffer:10000000});
if(createHash('sha256').update(base).digest('hex')!=='b97f969f299237b091d7e563d3493dab11a516843ab8e29ffb0e42919147711c')throw Error('Published runtime fingerprint mismatch');
const source=base.toString(),anchor='Di&&(window.__lifeStage=kA),kA.onBeforeFrame=';
if(source.split(anchor).length!==2)throw Error('Published stage hook changed');
const contents='import {installStreetVisibility as __galleryVisibility} from "./scripts/viewer/street-visibility.mjs";\n'+source.replace(anchor,'__galleryVisibility(kA),'+anchor);
await build({stdin:{contents,resolveDir:process.cwd(),sourcefile:'published-life-30ff0e8.js'},bundle:true,format:'esm',target:['chrome80','safari15'],minify:true,outfile:'assets/js/sketch-viewer.bundle.js',legalComments:'eof',logLevel:'info'});
