# Local Worlds integration

Gallery → Worlds now embeds `/assets/mirror-space/space/`, the shared ten-planet scene. The local bundle retains the nebula opening, travel effect, distinct fragment fields, streamed native terrain, Water (on by default) and Mesh (off by default). Closing or changing Gallery projects removes the iframe and releases its renderer and workers.

Run `npm run preview:gallery`, then open `http://127.0.0.1:5199/games.html#mirror-world`. The preview command syncs the four small runtime files from the standalone demo and updates the existing `_site/games.html` preview to match `_data/games.yml`. The standard Jekyll source remains `games.html` plus `_data/games.yml`.

The full baked data (about 10 GB) stays in `F:/MirrorWorld-gallery-lab/planet-1km-native/site`. Set `MIRROR_DEMO_SITE` to change that directory. The preview server mounts its `space/{tiles,overview,context,worlds}` and `gallery` assets under the same origin; it does not require the standalone server on port 5226, copy the data into OneDrive, or use a localhost iframe in the page source. After another standalone build, run `npm run sync:mirror-space` to update the small runtime files.

This is a local integration. Nothing was deployed, pushed, or published. The production exclusion of Gallery in `_config.yml` remains in place. A future deployment would need a separately configured host for the baked data; the local preview mount is deliberately not a production hosting setup. MirrorWorld's checkout is only read during the standalone build and has not been edited.

With the preview running, `npm run test:worlds` checks the opening, interrupted-flight return to All worlds, all ten visible planets, selection after return, default controls on reload, disposal on close, Life switching and the mobile layout. Latest result: no browser errors or missing assets. Proof is in `artifacts/worlds-integration.json` and the matching screenshots.

Native terrain now preloads on approach and replaces the display mesh only after GPU upload, with complementary ownership masks and a retained near window. The standalone `verify-lod-stability.mjs` checks loading overlap, original 0.3 m detail, stationary redraws, panning and zoom reversals. Results and limitations are documented in the standalone `LOD-STABILITY.md`.

The Worlds card uses `assets/gallery/worlds-nebula.webp`, a 1280 × 800 capture of the actual scene with its controls hidden. To refresh it, run `node scripts/capture-worlds-thumbnail.mjs` while the preview is running, then `npm run sync:mirror-space`. The local generated page uses a content hash for the thumbnail so an old cached capture is not reused.
