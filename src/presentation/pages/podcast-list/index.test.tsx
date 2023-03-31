import { podcastsModel } from '@/mocks/api/podcasts'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { describe, it, expect, vi } from 'vitest'

import PodcastListPage from './index'

describe('PodcastListPage', () => {
  vi.mock('@/controller/usePodcast', async () => {
    return {
      usePodcasts: () => ({
        podcasts: podcastsModel
      })
    }
  })
  it('renders the page', async () => {
    console.log('length', podcastsModel.length)
    render(
      <RecoilRoot>
        <MemoryRouter>
          <PodcastListPage />
        </MemoryRouter>
      </RecoilRoot>
    )
    await waitFor(() => {
      expect(screen.getByText('6')).toBeTruthy()
      expect(screen.getByLabelText(/Filter podcasts/)).toBeTruthy()
    })
  })
})
