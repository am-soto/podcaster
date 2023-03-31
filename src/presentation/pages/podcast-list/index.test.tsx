import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { describe, it, expect } from 'vitest'

import PodcastListPage from './index'

describe('PodcastListPage', () => {
  it('renders the page', () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <PodcastListPage />
        </MemoryRouter>
      </RecoilRoot>
    )
    expect(screen.getByText('0')).toBeTruthy()
    expect(screen.getByLabelText(/Filter podcasts/)).toBeTruthy()
  })
})
