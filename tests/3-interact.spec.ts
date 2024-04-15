import { test, expect } from '@playwright/test';

test('Search playwrite', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');

    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search docs').fill('Locators')
    await page.keyboard.press('Enter');

    // Expect a title "to contain" a substring.
    await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();
  });

