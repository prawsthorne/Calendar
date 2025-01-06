// filepath: /c:/Users/peter/Documents/GitHub/Calendar/convert.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, 'TwoOhTwoFive.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
  await page.pdf({
    path: 'TwoOhTwoFive.pdf',
    format: 'tabloid', // 11x17 inches
    margin: {
      top: '1in',
      right: '1in',
      bottom: '1in',
      left: '1in'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();