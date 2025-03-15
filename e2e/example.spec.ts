import { test, expect } from '@playwright/test'

test('example test', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const headingElement = page.locator('text=Home Page')
  await expect(headingElement).toBeVisible()
})
