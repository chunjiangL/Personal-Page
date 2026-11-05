# Sketch Game showcase

This adapter bundles the original SketchGame ApartmentStage, procedural neighborhood, atmosphere and AssetRenderCore. It changes asset delivery and the English website controls. It does not replace the original materials, weather, scene factories or free-camera implementation.

The three entry views are Neighborhood, Kitchen and Bedroom. Neighborhood retains the original street continuation, courtyards, authored props and traffic. Component inspection loads the unbatched source asset and uses the original GeometryStage and AssetRenderCore.

## Rebuild

Install this repository's package dependencies with `npm ci`. Set `SKETCH_GAME_ROOT` to the original SketchGame checkout (the local default is `G:/Personal Projects/SketchGame`). Asset exporters also use the original game's installed dependencies plus `meshoptimizer` and `@napi-rs/canvas` from `SKETCH_EXPORT_DEPS` (default: the temporary `sketch-showcase-export-deps` directory). The generated public payloads and bundle are committed here.

1. From the original game checkout, run `node --import tsx <website>/scripts/export-sketch-runtime.mjs` — export pinned assemblies and street assets, preserving metadata and verifying lossless compression and original loader compatibility.
2. `node scripts/export-sketch-prepared-geometry.mjs` — compute the original stroke charts and structure fields offline.
3. `node scripts/export-sketch-prepared-geometry.mjs --verify-only` — validate the cache against freshly generated source geometry.
4. `npm run build:viewer` and `npm run test:viewer`.

The runtime loads gzip payloads using DecompressionStream. Large, uncompressed intermediate GLBs are ignored. The prepared geometry cache checks source geometry fingerprints before reuse; regenerate it after scene or asset changes. The source game is never modified by the website build.

## Integration checks

Serve the Jekyll output over HTTP and open `games.html?qa=1`. The hidden `viewer-diagnostics` output reports startup time, camera, weather, scene/instance counts and component inspection state for DOM-based QA. Check all three views, five weather states, orbit/free camera, object picking, decomposition/reassembly, fullscreen and a narrow mobile viewport. No private asset server or external CDN is needed.
