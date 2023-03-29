import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import PodcastList from './index'

describe('PodcastList', () => {
  it('renders the page', () => {
    render(
      <MemoryRouter>
        <PodcastList />
      </MemoryRouter>
    )
    expect(screen.getByText(/Podcast List:/)).toBeTruthy()
  })
})
