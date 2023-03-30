import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Filter from '.'

describe('Filter', () => {
  it('renders the component', () => {
    render(<Filter quantity={5} value='a' onValueChange={(a) => a} />)
    expect(screen.getByText('5')).toBeTruthy()
  })
})
