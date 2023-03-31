import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import EpisodesPlayer from '.'

describe('EpisodesPlayer', () => {
  it('renders the component', () => {
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
    render(<EpisodesPlayer episode={podcastDetailsModel.episodes[0]} />)
    expect(screen.getByText(podcastDetailsModel.episodes[0].title)).toBeTruthy()
  })
})
