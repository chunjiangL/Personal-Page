import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {adaptPavementPaletteSource} from '../scripts/viewer/pavement-palette.mjs';

test('the construction/weather palette changes only pavement and curb; layout and asphalt survive',async()=>{
 const original=await fs.readFile(path.join(process.env.SKETCH_GAME_ROOT||'G:/Personal Projects/SketchGame','src/assets/scenes/street-layout.ts'),'utf8');
 const adapted=adaptPavementPaletteSource(original),pattern=/pavement:'#[0-9a-f]+',curb:'#[0-9a-f]+'/g;
 assert.equal(adapted.replace(pattern,'PALETTE'),original.replace(pattern,'PALETTE'));
 assert.notEqual(adapted.match(pattern)[0],original.match(pattern)[0]);assert.notEqual(adapted.match(pattern)[1],original.match(pattern)[1]);
 assert.throws(()=>adaptPavementPaletteSource(original.replace("pavement:'#c8bca4'","pavement:'#aaaaaa'")),/palette changed/);
});
