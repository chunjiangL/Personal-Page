import {chromium} from 'playwright';
import fs from 'node:fs/promises';

// Browser-native WebP encoding keeps this build step independent of native image packages.
const browser = await chromium.launch({channel: 'chrome', headless: true});
const page = await browser.newPage();
const sources = [
  ['avatar-clean.png', 'avatar', [480]],
  ['simworlds_preview.png', 'simworlds', [360, 720]],
  ['vab_preview.png', 'vab', [360, 720]],
  ['memobench_preview.jpg', 'memobench', [360, 720]],
  ['mosiv_preview.jpg', 'mosiv', [360, 720]],
  ['masiv_preview.jpg', 'masiv', [360, 720]],
  ['total_editing_preview.jpg', 'total-editing', [360, 720]],
];
await fs.mkdir('assets/img/home', {recursive: true});
try {
  for (const [file, name, widths] of sources) {
    const input = await fs.readFile('assets/img/' + file);
    for (const width of widths) {
      const result = await page.evaluate(async ({data, width}) => {
        const img = new Image(); img.src = data; await img.decode();
        const canvas = document.createElement('canvas');
        canvas.width = Math.min(width, img.naturalWidth);
        canvas.height = Math.round(img.naturalHeight * canvas.width / img.naturalWidth);
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/webp', .88).split(',')[1];
      }, {data: `data:image/${file.endsWith('.png') ? 'png' : 'jpeg'};base64,${input.toString('base64')}`, width});
      const output = Buffer.from(result, 'base64');
      await fs.writeFile(`assets/img/home/${name}-${width}.webp`, output);
      console.log(`${name}-${width}.webp: ${output.length} bytes`);
    }
  }
} finally { await browser.close(); }
