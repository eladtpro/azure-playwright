import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();

  // open new page
  const context = await browser.newContext();
  const page = await context.newPage();

  // navigate to a URL
  await page.goto('https://playwright.dev/');

  await browser.close();
})();