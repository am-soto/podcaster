import { test, expect } from '@playwright/test'

test.describe('Podcast Details', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/podcasts/1535809341')
  })

  test('Podcast Details', async ({ page }) => {
    expect(page.getByText(/The Joe Budden Podcast/)).toBeTruthy()
    expect(page.getByText(/Tune into Joe Budden and his friends\. Follow along the crazy adventures of these very random friends\./)).toBeTruthy()
  })

  test('Podcast Details go to episode', async ({ page }) => {
    await page.getByText(/Finneas/).click()
    expect(page.url()).toBe('http://localhost:5173/podcasts/1535809341/episodes/1000606556604')
  })
})
