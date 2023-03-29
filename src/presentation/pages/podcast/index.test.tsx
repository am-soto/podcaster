import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import Podcast from './index'

describe('Podcast', () => {
  it('renders the page', () => {
    render(
      <MemoryRouter>
        <Podcast />
      </MemoryRouter>
    )
    expect(screen.getByText(/Episodes:/)).toBeTruthy()
  })
})
