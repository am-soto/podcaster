import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import PodcastListPage from './index'

describe('PodcastListPage', () => {
  it('renders the page', () => {
    render(
      <MemoryRouter>
        <PodcastListPage />
      </MemoryRouter>
    )
    expect(screen.getByText('0')).toBeTruthy()
    expect(screen.getByLabelText(/Filter podcasts/)).toBeTruthy()
  })
})
