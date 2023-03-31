import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import NavBar from '.'

describe('NavBar', () => {
  vi.mock('@/controller/useLoading', async () => {
    return {
      useLoading: () => ({
        loading: false
      })
    }
  })
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    expect(screen.getByText('Podcaster')).toBeTruthy()
  })
})
