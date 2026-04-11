// @ts-check
const { test, expect } = require('@playwright/test');

// ── 1. Home page loads ──────────────────────────────
test('Home page loads with hero and popular calculators', async ({ page }) => {
  await page.goto('/');
  // Hero section should be visible
  await expect(page.locator('h1')).toContainText('300+ Free Calculators');
  // Stats row should show calculator count
  await expect(page.locator('.stat-n').first()).not.toBeEmpty();
  // Popular calculators section should have cards
  const cards = page.locator('.feat-card');
  await expect(cards.first()).toBeVisible();
  expect(await cards.count()).toBeGreaterThan(3);
});

// ── 2. Finance calculator (EMI) works ───────────────
test('EMI calculator accepts input and shows results', async ({ page }) => {
  await page.goto('/emi-calculator');
  // Wait for the app to hydrate
  await page.waitForSelector('[data-action="calculate"]', { timeout: 10000 });
  
  // Fill in inputs
  const inputs = page.locator('input[type="number"]');
  if (await inputs.count() >= 3) {
    await inputs.nth(0).fill('1000000'); // Principal
    await inputs.nth(1).fill('8.5');      // Interest rate
    await inputs.nth(2).fill('240');      // Tenure
  }
  
  // Click Calculate
  await page.click('[data-action="calculate"]');
  
  // Results should appear
  const results = page.locator('.results');
  await expect(results.first()).toBeVisible({ timeout: 5000 });
});

// ── 3. Health calculator (BMI) works ────────────────
test('BMI calculator navigates and has inputs', async ({ page }) => {
  await page.goto('/bmi-calculator');
  await page.waitForSelector('[data-action="calculate"]', { timeout: 10000 });
  
  // Should have calculator inputs
  const inputs = page.locator('input[type="number"], select');
  expect(await inputs.count()).toBeGreaterThan(0);
  
  // Title should mention BMI
  await expect(page.locator('h1')).toContainText('BMI');
});

// ── 4. Blog index loads ─────────────────────────────
test('Blog section shows blog cards', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('[data-action="showBlogSection"]', { timeout: 10000 });
  
  // Navigate to blog via the View All button
  await page.click('[data-action="showBlogSection"]');
  
  // Blog cards should be visible
  const blogCards = page.locator('.blog-card');
  await expect(blogCards.first()).toBeVisible({ timeout: 5000 });
  expect(await blogCards.count()).toBeGreaterThan(2);
});

// ── 5. Dashboard loads ──────────────────────────────
test('Dashboard shows stats and history', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#qDash', { timeout: 10000 });
  
  // Click Dashboard in sidebar
  await page.click('#qDash');
  
  // Dashboard header should appear
  await expect(page.locator('h1')).toContainText('Dashboard', { timeout: 5000 });
  
  // Stats should be visible
  await expect(page.locator('.stat').first()).toBeVisible();
});

// ── 6. Clear data flow ──────────────────────────────
test('Clear history button works with confirmation', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#qDash', { timeout: 10000 });
  await page.click('#qDash');
  await page.waitForSelector('[data-action="clearHistory"]', { timeout: 5000 });
  
  // Set up dialog handler to accept
  page.on('dialog', dialog => dialog.accept());
  
  // Click clear history
  await page.click('[data-action="clearHistory"]');
  
  // Toast should appear
  await expect(page.locator('#toast')).toHaveClass(/show/, { timeout: 5000 });
});

// ── 7. Consent banner appears on fresh session ──────
test('Consent banner appears when no prior consent', async ({ page, context }) => {
  // Clear storage to simulate fresh visit
  await context.clearCookies();
  await page.goto('/');
  
  // Wait for consent banner to appear
  const banner = page.locator('#consent-banner');
  await expect(banner).toBeVisible({ timeout: 10000 });
  
  // Accept and Reject buttons should be present
  await expect(page.locator('[data-consent="accept"]')).toBeVisible();
  await expect(page.locator('[data-consent="reject"]')).toBeVisible();
  
  // Click Accept
  await page.click('[data-consent="accept"]');
  
  // Banner should disappear
  await expect(banner).not.toBeVisible({ timeout: 5000 });
});

// ── 8. Theme toggle works ───────────────────────────
test('Theme toggle switches between light and dark', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#theme-toggle-btn', { timeout: 10000 });
  
  // Click theme toggle
  await page.click('#theme-toggle-btn');
  
  // Body should have light theme attribute or class
  const body = page.locator('body');
  const hasLight = await body.evaluate(el => 
    el.classList.contains('light') || el.getAttribute('data-theme') === 'light'
  );
  expect(hasLight).toBeTruthy();
  
  // Toggle back
  await page.click('#theme-toggle-btn');
  const hasDark = await body.evaluate(el => 
    !el.classList.contains('light') && el.getAttribute('data-theme') !== 'light'
  );
  expect(hasDark).toBeTruthy();
});
