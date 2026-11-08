# Gallery hosting

The public page is https://chunjiangliu.com/gallery.html. The legacy /games.html page redirects to it while retaining query parameters and the selected project hash.

Project thumbnails are real links to their Gallery hash. The URL selects the project ahead of stored history state. Each player has a separate iframe identity; repeated taps and restored pages retain a healthy matching player and repair mismatched documents. Resize messages and history writes are deduplicated. tests/gallery-mobile-routing.mjs covers touch targets, conflicting restored state, back/forward, refresh and closing.

The website is built by GitHub Pages from the main branch of chunjiangL/Personal-Page. Gallery embeds Life and Worlds under the same website origin. Life's compressed assets are included in this repository. Worlds keeps its viewer and worker JavaScript here, while baked terrain is served through https://worlds-assets.chunjiang-liu-richard.workers.dev/v1/.

## Zero-budget limits

- The deployment contains 23,254 terrain objects totaling 9,914,862,605 bytes. The uploader refuses a release or combined bucket inventory above 9,950,000,000 bytes, below R2 Standard's current 10 GB free storage allowance. It refuses changes to existing immutable objects.
- The account was checked with no other R2 buckets before this bucket was created. The dedicated personal-page-worlds bucket uses Standard storage. Its r2.dev URL is disabled and it has no public custom domain.
- Public access is read-only through Workers Free. Its hard 100,000-request daily account limit bounds the reader to at most 3.1 million R2 read operations over a 31-day month, below the current 10 million free Class B operations. Requests beyond the Workers Free limit stop with an error rather than paid overage. Cache hits do not read R2.
- This upload uses about 23,254 Class A writes plus inventory checks and bounded retries, below the current one million free Class A operations. The authenticated temporary uploader is removed after verification. No paid Workers plan, analytics add-on, custom-domain service, or R2 Infrequent Access is enabled.
- These bounds apply to this release and the current free plans. Do not add a second full terrain version, additional R2 data, or upgrade Workers without rechecking the storage and request budgets.

Current provider terms: https://developers.cloudflare.com/r2/pricing/ and https://developers.cloudflare.com/workers/platform/limits/.

## Rebuild and verify

Life: npm run build:viewer followed by npm run test:viewer. The standalone Worlds source remains in F:/MirrorWorld-gallery-lab/planet-1km-native/space-lab and imports the original engine read-only. After building it, npm run sync:mirror-space copies the small viewer files and preserves the configured public data root. Set MIRROR_DATA_BASE to an empty string to use local baked data, or to a public HTTPS root to change hosting.

For a local full preview, run npm run preview:gallery. The local server mounts the baked files from F:/MirrorWorld-gallery-lab/planet-1km-native/site when the viewer uses its local data root. No terrain data is copied into this repository.

Worker configuration is in scripts/cloudflare/wrangler.jsonc. The public Worker only serves approved terrain paths and GET/HEAD/OPTIONS, preserves raw gzip bytes, sets origin-specific CORS and caches immutable responses. tests/worlds-assets.test.mjs checks those boundaries. tests/worlds-hosting.mjs verifies original 0.3 m near terrain through the public host and return to all ten worlds. Set GALLERY_ORIGIN to the public website when testing the actual deployment.

The Gallery production build workflow checks the Jekyll output and the 1 GB Pages site limit without storing an extra build artifact. The existing Pages deployment publishes main. Credentials remain in local Wrangler storage and never enter this repository or the client bundle.

The two project introductions are English bullet lists, justified across the full player width. The Worlds thumbnail is a capture of the actual renderer; node scripts/capture-worlds-thumbnail.mjs refreshes it while the local preview is running.

## Native mesh inspection

Mesh displays wireframes only for the original 0.3 m native terrain. The reduced overview and full-planet display exports remain colored surfaces, without misleading proxy wireframes. At planet scale, subpixel native cells fade out; the viewer asks the visitor to zoom in to inspect them.

Clicking Mesh from orbit now moves into a native terrain inspection view, where the cells are visible. All worlds camera travel continues with ambient motion paused. Water waits for the full terrain before removing the sea: the overview export omits submerged triangles and cannot display lake beds by itself. tests/worlds-controls.mjs verifies these controls; an optional WORLDS_DATA_ROOT supplies local baked fixtures instead of the public host.

Life's touch-device path broadcasts constant ink/bounds attributes instead of repeating them per vertex, skips an unused legacy distance attribute and duplicate rigid draw batches, and builds its structure atlas from Float32 blocks rather than boxed numbers. Authored geometry and shader values are retained. The loading overlay follows the site color scheme. tests/life-webkit.mjs checks dark loading, actual rendering, repeated thumbnail taps and persisted-page restoration in WebKit with an iPhone viewport. This is desktop WebKit emulation, not a physical-device memory-limit test.

Turning Mesh on prefetches the facing native terrain window before ground mode and pauses subsequent full-planet display downloads while that window loads. The existing 96-tile working window and bounded cache still apply. The full display model remains hidden until all its packs are prepared, and native tiles retain their stencil/mask ownership to avoid overlapping terrain layers.

Run node tests/worlds-native-mesh.mjs with the local preview running (or GALLERY_ORIGIN set to the public site). It holds all full-planet display packs, verifies independent native loading and absence of proxy wireframes, inspects a native close-up, then releases the packs and checks return to all ten worlds. It uses the existing baked data without new uploads.

Life touch interaction: while orbiting or adjusting light controls in Bedroom, the viewer caps the moving pixel ratio at 1, defers global shadow fitting, uses one native transmission capture and omits exterior-only ink overlays. Interior ink and all solid surfaces remain. Releasing the gesture restores the original ratio, exterior ink, shadow and reflection passes.
node tests/life-touch-motion.mjs verifies the real Bedroom renderer and camera movement; BROWSER=webkit selects WebKit. Measurements are desktop emulation, not physical iPhone FPS.

Mobile load budget: touch devices bypass desktop prepared geometry and startup packs, retain the original vertex attributes with exact indexed deduplication (desk inspection ranges stay unindexed), and use a constant empty structure atlas. This simplifies per-triangle surface ink while retaining original solid geometry, materials and independent crease/silhouette strokes. Old scenes and GL contexts are released before new data loads; temporary inflated model Blob URLs are revoked after initialization, and desk-inspector shaders are not all warmed at startup.
node tests/life-mobile-budget.mjs exercises Neighborhood → Bedroom → Neighborhood and desk inspection with an iPhone 14 Pro viewport. BROWSER=webkit tests WebKit; actual framebuffer pixels are required, not just a running frame counter. This does not reproduce physical iPhone process memory limits.

On touch devices an explicit scene change replaces the Life child document (preserving scene/time/weather and asset revision) to release the old document's JS/WASM/GPU ownership before loading the other scene. This is user-triggered navigation, never an automatic crash/reload retry.
