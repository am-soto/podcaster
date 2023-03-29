import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import PodcastCardList from './index'

describe('PodcastCardList', () => {
  it('renders the page', () => {
    // render(<PodcastCardList />)
    expect(screen.getByText(/PodcastCardList/)).toBeTruthy()
  })
})
