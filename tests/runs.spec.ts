import { test, expect } from '@playwright/test';

// This sample simulates a larger test suite
const TEST_ITERATIONS = parseInt(process.env.TEST_ITERATIONS || "1000");
for (var i = 0; i < TEST_ITERATIONS; i++) {

    test('test ' + i, async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await page.getByRole('link', { name: 'Get started' }).click();
        // Expect a title "to contain" a substring.
        await expect(page).toHaveURL(/.*intro/);
    });
}