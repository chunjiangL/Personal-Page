# Gallery hosting

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
