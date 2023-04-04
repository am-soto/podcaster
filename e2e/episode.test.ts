import { test, expect } from '@playwright/test'

test.describe('Podcast Episode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/podcasts/1535809341/episodes/1000606858062')
  })

  test('Podcast Episode', async ({ page }) => {
    expect(page.getByText(/Episode 614/)).toBeTruthy()
    expect(page.getByText(/The JBP starts this episode with the latest news on Jonathan Majors whose lawyer released text messages that show the woman taking blame/)).toBeTruthy()
  })
})
