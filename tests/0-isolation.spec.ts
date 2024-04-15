import { test } from '@playwright/test';

test('example test', async ({ page }) => {
  // "page" belongs to an isolated BrowserContext, created for this specific test.
});

test('another test', async ({ page }) => {
  // "page" in this second test is completely isolated from the first test.
});