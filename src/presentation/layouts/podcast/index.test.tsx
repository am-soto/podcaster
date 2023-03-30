import { podcastModel } from '@/mocks/api/podcasts'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import PodcastLayout from './index'

describe('PodcastLayout', () => {
  vi.mock('react-router-dom', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await vi.importActual('react-router-dom')
    return {
      ...mod,
      useParams: () => ({
        podcastId: '1678378239'
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
    render(<PodcastLayout />)
    expect(screen.getByText(podcastModel[0].title)).toBeTruthy()
    expect(screen.getByText(`by ${podcastModel[0].author}`)).toBeTruthy()
    expect(screen.getByText(podcastModel[0].description)).toBeTruthy()
  })
})
