import { test, expect } from '@playwright/test';

test.describe('Specification Tables E2E Tests', () => {
  const productUrls = [
    '/products/single-toggle-jaw-crusher',
    '/products/double-toggle-jaw-crusher',
    '/products/vsi-cubisand-sand-maker',
    '/products/hsi-impactors',
    '/products/inclined-vibrating-screens',
    '/products/feeder',
    '/products/hydrocyclone-sand-classifiers',
    '/products/screw-sand-washers',
    '/products/bucket-sand-classifiers'
  ];

  test.beforeEach(async ({ page }) => {
    // Ensure server is available
    await page.goto('/');
    await expect(page).toHaveTitle(/VTech Makkers/);
  });

  productUrls.forEach(url => {
    test(`Specs table renders correctly on ${url}`, async ({ page }) => {
      await page.goto(url);
      
      // Wait for page to load
      await page.waitForSelector('#specs', { timeout: 10000 });
      
      // Check that specs section exists
      const specsSection = page.locator('#specs');
      await expect(specsSection).toBeVisible();
      
      // Check for blue header
      const header = specsSection.locator('.bg-blue-800');
      await expect(header).toBeVisible();
      await expect(header).toContainText('Technical Specifications');
      
      // Desktop view: Check for table structure
      await page.setViewportSize({ width: 1024, height: 768 });
      const desktopTable = specsSection.locator('table');
      if (await desktopTable.count() > 0) {
        await expect(desktopTable).toBeVisible();
        
        // Check for sticky Model column
        const modelHeader = desktopTable.locator('th').first();
        await expect(modelHeader).toContainText('Model');
        
        // Verify table has data rows
        const dataRows = desktopTable.locator('tbody tr');
        await expect(dataRows).toHaveCountGreaterThan(0);
      }
      
      // Mobile view: Check for card layout
      await page.setViewportSize({ width: 375, height: 667 });
      const mobileCards = specsSection.locator('.sm\\:hidden .space-y-4');
      if (await mobileCards.count() > 0) {
        await expect(mobileCards).toBeVisible();
        
        // Check for expandable cards
        const specCards = mobileCards.locator('.border');
        await expect(specCards).toHaveCountGreaterThan(0);
      }
    });
  });

  test('Mobile accordion functionality', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/products/single-toggle-jaw-crusher');
    
    await page.waitForSelector('#specs');
    
    // Look for mobile cards
    const mobileSection = page.locator('#specs .sm\\:hidden');
    if (await mobileSection.count() > 0) {
      const firstCard = mobileSection.locator('.border').first();
      await expect(firstCard).toBeVisible();
      
      // Check that card contains model information
      await expect(firstCard).toContainText('VTST');
    }
  });

  test('Accessibility compliance', async ({ page }) => {
    await page.goto('/products/single-toggle-jaw-crusher');
    await page.waitForSelector('#specs');
    
    // Check for proper ARIA labels and semantic structure
    const specsSection = page.locator('#specs');
    const tables = specsSection.locator('table');
    
    if (await tables.count() > 0) {
      // Check table headers
      const headers = tables.locator('th');
      await expect(headers).toHaveCountGreaterThan(0);
      
      // Verify keyboard navigation
      await page.keyboard.press('Tab');
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    }
  });

  test('Performance check', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/products/single-toggle-jaw-crusher');
    await page.waitForSelector('#specs table, #specs .sm\\:hidden');
    const loadTime = Date.now() - startTime;
    
    // Specs should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});