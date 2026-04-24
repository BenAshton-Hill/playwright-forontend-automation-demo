import { test, expect } from '@playwright/test';

test('YouTube search works', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  // Accept cookies if popup appears
  const acceptButton = page.locator('button:has-text("Accept")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  // Search for something
  await page.fill('input[name="search_query"]', 'playwright testing');
  await page.keyboard.press('Enter');

  // Assert results appear
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('ytd-video-renderer')).toHaveCountGreaterThan(0);
});
