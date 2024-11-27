const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({headless: false, slowMo: 5000, devtools: true});
  const page = await browser.newPage();
  await page.goto('https://examples.com');
  const title = await page.title();
  console.log(`El título de la página es: ${title}`);
  await browser.close();
})();
