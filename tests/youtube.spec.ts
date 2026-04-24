import { test, expect } from '@playwright/test';

test('YouTube homepage loads', async ({ page }) => {
  await page.goto('https://www.youtube.com');
  await expect(page).toHaveTitle(/YouTube/);
});

test('YouTube search works', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  await page.fill('input[name="search_query"]', 'playwright testing');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/search/);
});
