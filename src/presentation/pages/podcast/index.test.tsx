import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import PodcastPage from './index'

describe('Podcast', () => {
  vi.mock('react-router-dom', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await vi.importActual('react-router-dom')
    return {
      ...mod,
      useParams: () => ({
        podcastId: podcastDetailsModel.id
      })
    }
  })
  vi.mock('@/controller/usePodcast', async () => {
    return {
      usePodcast: () => ({
        podcast: podcastDetailsModel
      })
    }
  })
  it('renders the page', () => {
    render(
      <MemoryRouter>
        <PodcastPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Episodes:/)).toBeTruthy()
    podcastDetailsModel.episodes.forEach((e) => expect(screen.getByText(e.title)).toBeTruthy())
  })
})
