import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CustomLink from '.'

describe('CustomLink', () => {
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <CustomLink to='/link'>Link</CustomLink>
      </MemoryRouter>
    )
    expect(screen.getByText('Link')).toBeTruthy()
  })
})
