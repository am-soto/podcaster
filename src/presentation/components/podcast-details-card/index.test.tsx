import { podcastsModel } from '@/mocks/api/podcasts'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import PodcastCard from '.'

describe('PodcastCard', () => {
  it('renders the component', () => {
    const podcast = podcastsModel[0]
    render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    )
    const image = document.querySelector('img') as HTMLImageElement

    expect(image.alt).toContain('cover image')
    expect(image.src).toContain(podcast.image)
    expect(screen.getByText(podcast.title)).toBeTruthy()
    expect(screen.getByText(`by ${podcast.author}`)).toBeTruthy()
    expect(screen.getByText(podcast.description)).toBeTruthy()
  })
})
