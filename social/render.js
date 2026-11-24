// Rendert jede <section class="s"> einer HTML-Datei als PNG (1080 × 1350).
// Aufruf: node social/render.js <datei.html> <ausgabeordner>
// Dateinamen: <nummer>-<data-name>.png
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const [file, out] = process.argv.slice(2);
  if (!file || !out) { console.error('Aufruf: node social/render.js <datei.html> <ausgabeordner>'); process.exit(1); }
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto('file://' + path.resolve(file));
  await page.evaluate(() => document.body.classList.remove('preview'));
  const names = await page.$$eval('section.s', s => s.map((el, i) => el.dataset.name || String(i + 1)));
  for (let i = 0; i < names.length; i++) {
    await page.evaluate(i => document.querySelectorAll('section.s').forEach((el, j) => el.classList.toggle('on', i === j)), i);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const target = path.join(out, `${i + 1}-${names[i]}.png`);
    await page.screenshot({ path: target });
    console.log(target);
  }
  await browser.close();
})();
