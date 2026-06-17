const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const imgPath = path.resolve(__dirname, '../public/assets/images/maikol_duran.png');
const imgB64 = fs.readFileSync(imgPath).toString('base64');
const imgSrc = 'data:image/png;base64,' + imgB64;

const html = fs.readFileSync(
  path.resolve(__dirname, '../public/assets/downloads/cv_armando_maikol_duran.html'),
  'utf8'
);

const htmlFixed = html.replace(
  /src="file:\/\/\/[^"]*maikol[^"]*\.png"/,
  'src="' + imgSrc + '"'
);

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1200 });
  await page.setContent(htmlFixed, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({
    path: path.resolve(__dirname, 'cv_preview.png'),
    fullPage: true
  });
  await browser.close();
  console.log('Screenshot saved');
})();
