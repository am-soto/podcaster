import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EpisodesCounter from '.'

describe('EpisodesCounter', () => {
  it('renders the component', () => {
    render(<EpisodesCounter episodes={podcastDetailsModel.episodes} />)
    expect(screen.getByText(`Episodes: ${podcastDetailsModel.episodes.length}`)).toBeTruthy()
  })
})
