import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Episode from './index'

describe('Episode', () => {
  it('renders the page', () => {
    // render(<Episode />)
    expect(screen.getByText(/Episode/)).toBeTruthy()
  })
})
