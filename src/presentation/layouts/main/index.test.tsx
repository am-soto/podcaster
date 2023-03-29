import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import MainLayout from './index'

describe('MainLayout', () => {
  it('renders the layout', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    )
    expect(screen.getByText(/Podcaster/)).toBeTruthy()
  })
})
