import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import PodcastLayout from './index'

describe('PodcastLayout', () => {
  it('renders the layout', () => {
    render(<PodcastLayout />)
    expect(screen.getByText(/Podcast Information Card/)).toBeTruthy()
  })
})
