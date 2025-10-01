import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from '@axe-core/playwright';

test.describe('Accessibility Tests for Specs Tables', () => {
  const productUrls = [
    '/products/single-toggle-jaw-crusher',
    '/products/double-toggle-jaw-crusher',
    '/products/vsi-cubisand-sand-maker'
  ];

  productUrls.forEach(url => {
    test(`Accessibility compliance for ${url}`, async ({ page }) => {
      await page.goto(url);
      await page.waitForSelector('#specs');
      
      // Inject axe-core
      await injectAxe(page);
      
      // Run accessibility check on the specs section
      await checkA11y(page, '#specs', {
        detailedReport: true,
        detailedReportOptions: { html: true },
        rules: {
          // Focus on table and interactive element accessibility
          'color-contrast': { enabled: true },
          'keyboard': { enabled: true },
          'focus-order-semantics': { enabled: true },
          'aria-roles': { enabled: true },
          'aria-required-children': { enabled: true },
          'aria-required-parent': { enabled: true }
        }
      });
    });
  });

  test('Keyboard navigation in specs tables', async ({ page }) => {
    await page.goto('/products/single-toggle-jaw-crusher');
    await page.waitForSelector('#specs');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    let focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Continue tabbing through specs section
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      focusedElement = page.locator(':focus');
      if (await focusedElement.count() > 0) {
        await expect(focusedElement).toBeVisible();
      }
    }
  });

  test('Mobile accordion accessibility', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/products/single-toggle-jaw-crusher');
    await page.waitForSelector('#specs');
    
    await injectAxe(page);
    
    // Check mobile-specific accessibility
    await checkA11y(page, '#specs .sm\\:hidden', {
      rules: {
        'button-name': { enabled: true },
        'aria-expanded': { enabled: true },
        'focusable-content': { enabled: true }
      }
    });
  });

  test('Table structure accessibility', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/products/single-toggle-jaw-crusher');
    await page.waitForSelector('#specs table');
    
    await injectAxe(page);
    
    // Check table-specific accessibility
    await checkA11y(page, '#specs table', {
      rules: {
        'table-header': { enabled: true },
        'th-has-data-cells': { enabled: true },
        'td-headers-attr': { enabled: true },
        'table-duplicate-name': { enabled: true }
      }
    });
  });
});