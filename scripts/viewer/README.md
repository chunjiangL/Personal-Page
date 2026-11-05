# Sketch Game showcase

This adapter bundles the original SketchGame ApartmentStage, procedural neighborhood, atmosphere and AssetRenderCore. It changes asset delivery and the English website controls. The original materials, weather and scene factories remain intact.

The two entry views are Neighborhood and Bedroom, with fixed cameras and weather selection. Neighborhood retains the original street continuation, courtyards, authored props and traffic. Bedroom faces the real window, framing the complete desk and chair. Only the desktop monitor, keyboard, mouse, lamp and mini computer are selectable. Their source triangles provide picking; the original GeometryStage and AssetRenderCore show individual parts on a transparent foreground canvas while the real room is blurred behind it. The keyboard's keycaps stay together as one readable exploded layer.

## Rebuild

Install this repository's package dependencies with `npm ci`. Set `SKETCH_GAME_ROOT` to the original SketchGame checkout (the local default is `G:/Personal Projects/SketchGame`). Asset exporters also use the original game's installed dependencies plus `meshoptimizer` and `@napi-rs/canvas` from `SKETCH_EXPORT_DEPS` (default: the temporary `sketch-showcase-export-deps` directory). The generated public payloads and bundle are committed here.

1. From the original game checkout, run `node --import tsx <website>/scripts/export-sketch-runtime.mjs` — export pinned assemblies and street assets, preserving metadata and verifying lossless compression and original loader compatibility.
2. `node scripts/export-sketch-prepared-geometry.mjs` — compute the original stroke charts and structure fields offline.
3. `node scripts/export-sketch-prepared-geometry.mjs --verify-only` — validate the cache against freshly generated source geometry.
4. `npm run build:viewer` and `npm run test:viewer`.

The runtime loads gzip payloads using DecompressionStream. Large, uncompressed intermediate GLBs are ignored. The prepared geometry cache checks source geometry fingerprints before reuse; regenerate it after scene or asset changes. The source game is never modified by the website build.

## Integration checks

Serve the Jekyll output over HTTP and open `games.html?qa=1`. The hidden `viewer-diagnostics` output reports startup time, fixed camera, weather and component inspection state for DOM-based QA. Check both views, weather changes, that drag/wheel/keyboard cannot move either camera, individual desktop object picking, decomposition/reassembly, background blur, fullscreen and narrow mobile framing. No private asset server or external CDN is needed.
