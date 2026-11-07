const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { after, before, test } = require('node:test');
const { chromium } = require('playwright');

const siteDir = path.resolve(process.env.SITE_DIR || '_site');
const chromePath = process.env.CHROME_PATH;

let browser;
let page;
let server;
let baseUrl;

function contentType(filePath) {
  const extension = path.extname(filePath);
  return {
    '.css': 'text/css',
    '.html': 'text/html',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
  }[extension] || 'application/octet-stream';
}

before(async () => {
  server = http.createServer((request, response) => {
    const requestPath = new URL(request.url, 'http://localhost').pathname;
    const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\//, '');
    const filePath = path.resolve(siteDir, relativePath);

    if (!filePath.startsWith(`${siteDir}${path.sep}`) || !fs.existsSync(filePath)) {
      response.writeHead(404).end('Not found');
      return;
    }

    response.writeHead(200, { 'content-type': contentType(filePath) });
    fs.createReadStream(filePath).pipe(response);
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
  browser = await chromium.launch({
    headless: true,
    ...(chromePath ? { executablePath: chromePath } : {}),
  });
  page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
});

after(async () => {
  await browser?.close();
  await new Promise((resolve) => server?.close(resolve));
});

test('email is exposed as a touch-friendly mail link instead of plain text', async () => {
  const emailTextCount = await page.locator('email').count();
  const emailLink = page.locator('.social-icons a[href^="mailto:"]');

  assert.equal(emailTextCount, 0);
  assert.equal(await emailLink.count(), 1);
  const box = await emailLink.boundingBox();
  assert.ok(box.width >= 40, `expected width >= 40px, received ${box.width}px`);
  assert.ok(box.height >= 40, `expected height >= 40px, received ${box.height}px`);
});

test('mobile profile and six contents links fit within 360px vertically', async () => {
  const box = await page.locator('header').boundingBox();
  assert.ok(box.height <= 360, `expected height <= 360px, received ${box.height}px`);
});

test('mobile contents links have a 44px minimum touch height', async () => {
  const heights = await page.locator('.sidebar-toc a').evaluateAll((links) =>
    links.map((link) => link.getBoundingClientRect().height)
  );

  assert.ok(heights.length > 0);
  heights.forEach((height) => {
    assert.ok(height >= 44, `expected height >= 44px, received ${height}px`);
  });
});

test('publication teasers use the available mobile content width', async () => {
  const widths = await page.locator('.publications .teaser').evaluateAll((images) =>
    images.map((image) => image.getBoundingClientRect().width)
  );
  const wrapperWidth = await page.locator('.wrapper').evaluate((wrapper) =>
    wrapper.getBoundingClientRect().width
  );

  assert.ok(widths.length > 0);
  widths.forEach((width) => {
    assert.ok(width >= wrapperWidth - 30, `expected width >= ${wrapperWidth - 30}px, received ${width}px`);
  });
});

test('publication links have a 40px minimum touch height', async () => {
  const heights = await page.locator('.publications .links a.btn').evaluateAll((links) =>
    links.map((link) => link.getBoundingClientRect().height)
  );

  assert.ok(heights.length > 0);
  heights.forEach((height) => {
    assert.ok(height >= 40, `expected height >= 40px, received ${height}px`);
  });
});

test('publication teaser images stay within a compact mobile height', async () => {
  const heights = await page.locator('.publications .teaser').evaluateAll((images) =>
    images.map((image) => image.getBoundingClientRect().height)
  );

  heights.forEach((height) => {
    assert.ok(height <= 170, `expected height <= 170px, received ${height}px`);
  });
});

test('publication details start after the teaser image', async () => {
  const positions = await page.locator('.publications .pub-row').evaluateAll((rows) =>
    rows.map((row) => ({
      imageBottom: row.querySelector('.teaser').getBoundingClientRect().bottom,
      detailsTop: row.querySelector('.col-sm-9').getBoundingClientRect().top,
    }))
  );

  positions.forEach(({ imageBottom, detailsTop }) => {
    assert.ok(detailsTop >= imageBottom, `expected details at ${detailsTop}px after image ending at ${imageBottom}px`);
  });
});
