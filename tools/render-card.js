// Renders business-card/card.html into the card images and the print PDF.
// Usage: node tools/render-card.js
// Needs Playwright with Chromium (set CHROMIUM_PATH if the browser is not found automatically).
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

(async () => {
  const dir = path.join(__dirname, '..', 'business-card');
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage({ viewport: { width: 1200, height: 2200 } });
  const url = 'file://' + path.join(dir, 'card.html');

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await (await page.$('#front-dark')).screenshot({ path: path.join(dir, 'front-dark.png') });
  await (await page.$('#back')).screenshot({ path: path.join(dir, 'back.png') });

  // 2-page print PDF, 3.5in x 2in: dark front on page 1, back on page 2
  await page.addStyleTag({ content: '@page{size:3.5in 2in;margin:0} body{padding:0;gap:0;background:none;display:block} #front{position:absolute;left:-5000px} .card{zoom:0.32;page-break-after:always}' });
  await page.pdf({ path: path.join(dir, 'business-card.pdf'), width: '3.5in', height: '2in', printBackground: true });

  // Earlier light-front options, for reference
  for (const art of ['funnel', 'target', 'network']) {
    await page.goto(url + '?art=' + art, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await (await page.$('#front')).screenshot({ path: path.join(dir, 'options', `front-light-${art}.png`) });
  }
  await browser.close();
  console.log('Rendered front-dark.png, back.png, business-card.pdf and options/');
})();
