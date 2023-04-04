import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('Homepage has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Podcaster/)
  })

  test('Homepage has Navbar', async ({ page }) => {
    expect(page.getByText(/Podcaster/)).toBeTruthy()
  })

  test('Homepage filter - 0 results', async ({ page }) => {
    expect(page.getByText(/100/)).toBeTruthy()
    await page.getByLabel(/Filter podcasts/).fill('qwer')
    expect(page.getByText(/0/)).toBeTruthy()
    expect(page.getByText(/No results/)).toBeTruthy()
  })

  test('Homepage filter - 1 result', async ({ page }) => {
    expect(page.getByText(/100/)).toBeTruthy()
    await page.getByLabel(/Filter podcasts/).fill('The Joe Budden Podcast')
    expect(page.getByText(/1/)).toBeTruthy()
  })

  test('Homepage filter - 32 results', async ({ page }) => {
    expect(page.getByText(/100/)).toBeTruthy()
    await page.getByLabel(/Filter podcasts/).fill('The')
    expect(page.getByText(/32/)).toBeTruthy()
  })

  test('Homepage go to podcast details', async ({ page }) => {
    await page.getByText(/The Joe Budden Podcast/).click()
    expect(page.url()).toBe('http://localhost:5173/podcasts/1535809341')
  })
})
