import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import EpisodesList from '.'

describe('EpisodesList', () => {
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
    render(
      <MemoryRouter>
        <EpisodesList episodes={podcastDetailsModel.episodes} />
      </MemoryRouter>
    )
    podcastDetailsModel.episodes.forEach((e) => expect(screen.getByText(e.title)).toBeTruthy())
  })
})
