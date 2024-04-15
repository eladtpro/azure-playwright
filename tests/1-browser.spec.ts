import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  // ... perform browser actions ...
  await browser.close();
})();