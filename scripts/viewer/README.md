# Sketch Game showcase

## Neighborhood introduction

Neighborhood opens with a 4.8-second shot opens square to the bus-stop facade with exact orthographic projection: the bus, shelter and storefronts retain the same scale regardless of depth. The camera first rises clear of the opposite pavement, retreats while smoothly recovering perspective, arcs around to the corner, and descends into the interactive view. The final descent overlaps the camera handoff, avoiding a second slow settle. The projection maps the near/far planes correctly throughout the morph and survives native automatic depth fitting. Native cloud density and ink shading are retained with local ray construction for the orthographic projection; their introductory framing blends back to the normal sky. The original traffic simulation advances to a bus-stop dwell for a repeatable opening, holds during the flat reveal, and resumes without teleporting vehicles. No geometry hiding or deformation is used. Replay intro repeats the shot; Skip intro restores the interactive camera and traffic state. Reduced-motion users retain the static entry. Bedroom retains its interactive camera. For local composition inspection, `&preview=perspective&shot=1.85` freezes a timestamp in seconds. Cloud volume textures are shared with the native material to avoid duplicate GPU allocations. On phones the toolbar wraps into scene/weather, lighting, and view-control rows, with every control reachable without horizontal scrolling.
This adapter bundles the original SketchGame ApartmentStage, procedural neighborhood, atmosphere and AssetRenderCore. It changes asset delivery, the English website controls and the specific local art treatments documented below. The original game checkout remains untouched.

The Gallery opens on Life with Neighborhood, Sunny weather and 80% zoom. Its opening orbit is 7° to the right and 4° up from the authored street pose. The second entry view is Bedroom. In Neighborhood, drag or use the arrow keys to orbit the original street-corner target. The camera moves at a fixed radius, up to 8° horizontally and 4° vertically, with at least 65 cm of clearance above the pavement. Bedroom uses the same bounded orbit around the desk chair, with a shorter radius to clear the wall behind the camera. Each scene remembers its own angles. Scroll, use − / +, or press those keys on the focused canvas to zoom from 80% to 250%; the percentage button (or 0) restores the opening framing for that scene. Zoom changes only the lens, never the camera position or direction, and is retained per scene across resizing and fullscreen. It is disabled during object inspection. Neighborhood retains the original street continuation, courtyards, authored props and traffic. Bedroom faces the real window, framing the complete desk and chair. Only the desktop monitor, keyboard, mouse, lamp and mini computer are selectable. The room records the triangle ranges for these objects as it batches the bedroom assembly. Picking, component fills and ink reuse those prepared room buffers. A single WebGL renderer draws both views, with a small cached room image behind inspection. Returning keeps all five views ready for reuse. The inspection view uses each original component mesh as a joint. Optical sheets and ports separate along their depth, hinge hardware along the pin axes, and the keyboard opens in registered cap, stem, switch and plate layers. Drag or use the arrow keys to orbit a model, scroll or pinch to zoom, and select a component to focus it. Separation interpolates the entire assembly without resetting the camera.

Instanced building creases now use contour density to set their LOD feature scale. Previously, a whole material-merged building kept hundreds of unresolved window and trim edges at full opacity. The adapter feeds corrected bounds into the unchanged native edge shader, fading dense creases with distance and recovering them on zoom. Simple roof edges, surface shaders, geometry, and weather are unchanged.

Pavement joints use pixel coverage filtering on continuous slab coordinates, including the staggered row boundary. The original folded-distance derivative exaggerated subpixel seams into broken dark marks at the wall base. Fine joints fade before their spacing becomes unresolved. A separate palette adapter makes pavement and curbs neutral concrete gray in both dry and wet weather; slab dimensions, asphalt, graphite strokes and native wet reflections remain unchanged.

Foreground trees keep their cached geometry and original lighting/weather pipeline. Lighter folded leaves, softly varied crown pigment and sparse filtered leaf dabs add surface detail. A chained material hook reuses the native antialiased pen for subtle hatching at the sun transition and shaded silhouette; strength falls in overcast, rain and night. Tree triangle creases stay suppressed. The finish is installed before the first frame and uses only uniforms for subsequent weather changes, without extra geometry, textures or render passes.

Time of day follows an art-directed solar arc from 05:30 to 18:30. Noon uses the original framing and weather lighting. The street, sky, fog and clouds take on a rose tint at dawn and an amber tint at dusk. Rain and Overcast soften both tints. Night uses the moon and remembers the daylight hour for the next weather switch. Light intensity scales the current key light from 0% to 200%, and Azimuth offsets its direction by up to 180°. During a drag the cloud shader samples the original density along the moving sun direction, so its attached strokes fade continuously with the shadow.

Bedroom draws its curtains from 05:30 to about 07:15 and closes them between 16:45 and 18:30. Daylight projects through the actual casement onto surfaces throughout the day. In grazing light each visible surface integrates the camera ray's path through the two open panes, up to its own depth. A room-scale sun map draws the combined furniture triangles in one pass, and a floor clearance map grounds the chair, bed, and desk. While orbiting the Bedroom or adjusting its time, the viewer draws the prepared scene meshes and ink directly with the current camera and lighting. It reuses the street shadow and window reflection between full renders. Sustained solar changes, releasing the control, or pausing a gesture trigger a full render. The room-scale sun map, curtain and light shafts follow the current time throughout. The Bedroom color pass submits only street instances potentially visible through either window. During motion, solid wall panels also cull fully covered mesh bounds. Distant street props under three pixels drop out of the motion pass, and props under twelve pixels use their color fills. The shadow and mirror cameras retain the full instance list. Plain plaster uses daylight, sky fill, and bounce from the oak floor. Ink accents belong to upholstery seams, curtain folds, and joinery.

## Rebuild

Install this repository's package dependencies with `npm ci`. Set `SKETCH_GAME_ROOT` to the original SketchGame checkout (the local default is `G:/Personal Projects/SketchGame`). Asset exporters also use the original game's installed dependencies plus `meshoptimizer` and `@napi-rs/canvas` from `SKETCH_EXPORT_DEPS` (default: the temporary `sketch-showcase-export-deps` directory). The generated public payloads and bundle are committed here.

1. From the original game checkout, run `node --import tsx <website>/scripts/export-sketch-runtime.mjs` — export pinned assemblies and street assets, preserving metadata and verifying lossless compression and original loader compatibility.
2. `node scripts/export-sketch-prepared-geometry.mjs` — compute the original stroke charts and structure fields offline.
3. `node scripts/export-sketch-prepared-geometry.mjs --verify-only` — validate the cache against freshly generated source geometry.
4. `node scripts/deduplicate-sketch-models.mjs` — deduplicate exact physical GLB ranges and stamp compressed content hashes, preserving every referenced byte.
5. `node scripts/compact-sketch-cache.mjs` — retain the requested fleet and encode prepared arrays without quantization. Every decoded array is compared bit-for-bit with the original. Original `prepared/` files remain offline rebuild/test inputs.
6. `node scripts/export-sketch-contours.mjs` — cache the original Three.js edge algorithm for every resolved mesh/angle pair. Compare endpoint order and bytes with expanded source geometry. Shader code is unchanged.
7. `npm run build:viewer` and `npm run test:viewer`.

The runtime loads gzip payloads using DecompressionStream, with Three.js's bundled fflate decoder as a byte-exact fallback when native gzip streams are unavailable. Compressed files use SHA-256 content URLs and CacheStorage, independent of page versions; unavailable persistent storage falls back to ordinary fetch. Cached geometry and contours check source fingerprints before reuse, with original-algorithm fallback. The build guards the algorithm source hashes. Regenerate after scene or algorithm changes. Large, uncompressed intermediate GLBs are ignored; the source game is never modified by the website build.

Browser bundles target Chromium 80 / Safari 15 syntax. `browser-compat.mjs` installs missing structured-clone, relative array indexing, own-property and replace-all APIs before the original runtime executes; native implementations remain in use when available. Worlds uses the same helper, including the gzip fallback inside its terrain worker. `demo-bootstrap.js` is a classic-script error boundary so module import failures and context loss display a retry panel with the actual error and browser version instead of a blank loading panel. WebGL 2 is still required. `tests/android-compat.mjs` accepts `LEGACY_CHROMIUM` for a real older executable or `MISSING_APIS=1` for capability-removal tests; these do not substitute for a physical Huawei GPU test.

The fleet adapter keeps the original orange bus, yellow hatchback and pickup. Only the pickup body pigment changes to the source sage green. Other vehicle specifications are removed before construction, so no invisible traffic agents remain. Weather, shaders, motion, bus-stop dwell, glass and wheels retain their original implementation.

## Integration checks

Mobile Neighborhood visibility is refined per material instance against both
the main camera and the shadow cameras. Instances outside both are skipped;
the shadow pass draws only its packed caster prefix. Fully fog-hidden instances
retire from the color pass, while actual opaque wall triangles conservatively
occlude enclosed objects and their ink. Window/door gaps, grazing bounds and
off-screen shadow casters remain intact. Decisions are cached until camera,
light, fog or native instance lists change. Bedroom and desktop retain their
existing render paths. `qa=1&budget=mobile&culling=off` is the controlled baseline;
`data-visibility` records counts and CPU preparation time.

For this visibility-only release use `npm run build:viewer:release`. It extends
the SHA-256-checked published runtime from commit `30ff0e8` using a guarded stage
hook, keeping its exact cached geometry/runtime pairing. The LIFE working tree
has since advanced beyond the baked loader fingerprint; the normal source build
continues to reject that mismatch. Do not bypass that guard or bake unrelated
LIFE changes into a performance patch. The same hook is also integrated in the
website entry source for a future source/cache refresh. The release build needs
that Git commit available locally; it does not read or modify the LIFE checkout.

Touch rendering starts at at most one device pixel per CSS pixel. Neighborhood
can step down to 0.8 after sustained slow frames, with a longer recovery window
to avoid resolution oscillation. It uses Three's single transmission capture
for street windows instead of the asset inspector's multilayer glass compositor;
the desktop and Bedroom inspection compositor are unchanged. Mobile clouds retain
the authored density and pen, with up to 40 view samples and four weighted sunlight
samples. `qa=1&budget=mobile` exercises this branch on a desktop browser; it does
not emulate phone hardware. `data-render-budget` on the diagnostic output records
frame time, resolution and cloud steps.

On touch devices compressed downloads use 512 KiB HTTP ranges with validated Content-Range and a whole-file SHA-256 check. A 25-second idle timeout retries the current segment twice; servers returning a complete 200 response remain supported. Storage reads have a two-second fallback deadline so stalled CacheStorage does not hold startup indefinitely. The loading panel reports the active file and transferred bytes. Mobile model and contour download concurrency is reduced; geometry and authored detail are unchanged. `tests/resilient-download.test.mjs` covers resumed segments, stalls, truncated responses and servers ignoring Range.

Serve the Jekyll output over HTTP and open `gallery.html?qa=1`. The hidden `viewer-diagnostics` output reports startup time, camera position and aim, weather and component inspection state for DOM-based QA; its `data-camera` attribute reports lens zoom and render counts. Check both views, weather changes, zoom limits/reset, that street drags move the eye around a fixed target at constant radius and FOV, that reset restores the original pose, and that Bedroom restores its opening composition on reset and supports individual desktop object picking after a drag, decomposition/reassembly, background blur, fullscreen and narrow mobile framing. No private asset server or external CDN is needed.
