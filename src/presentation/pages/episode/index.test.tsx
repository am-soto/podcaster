import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import EpisodePage from './index'

describe('Episode', () => {
  vi.mock('react-router-dom', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await vi.importActual('react-router-dom')
    return {
      ...mod,
      useParams: () => ({
        podcastId: podcastDetailsModel.id,
        episodeId: podcastDetailsModel.episodes[0].id
      })
    }
  })
  vi.mock('@/controller/usePodcast', async () => {
    return {
      usePodcast: () => ({
        getEpisode: () => podcastDetailsModel.episodes[0]
      })
    }
  })
  it('renders the page', () => {
    render(<EpisodePage />)
    expect(screen.getByText(podcastDetailsModel.episodes[0].title)).toBeTruthy()
  })
})
