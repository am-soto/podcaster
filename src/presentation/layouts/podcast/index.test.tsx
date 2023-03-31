import { podcastModel } from '@/mocks/api/podcasts'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import PodcastLayout from './index'

describe('PodcastLayout', () => {
  vi.mock('react-router-dom', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await vi.importActual('react-router-dom')
    return {
      ...mod,
      useParams: () => ({
        podcastId: podcastModel[0].id
      })
    }
  })
  vi.mock('@/controller/usePodcast', async () => {
    return {
      usePodcast: () => ({
        podcast: podcastModel[0]
      })
    }
  })

  it('renders the layout', () => {
    render(
      <MemoryRouter>
        <PodcastLayout />
      </MemoryRouter>
    )
    expect(screen.getByText(podcastModel[0].title)).toBeTruthy()
    expect(screen.getByText(`by ${podcastModel[0].author}`)).toBeTruthy()
    expect(screen.getByText(podcastModel[0].description)).toBeTruthy()
  })
})
