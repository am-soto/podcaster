import { podcastModel } from '@/mocks/api/podcasts'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import PodcastCardList from '.'

describe('PodcastCardList', () => {
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <PodcastCardList podcasts={podcastModel} />
      </MemoryRouter>
    )
    podcastModel.forEach((podcast) => {
      const image = document.querySelector('img') as HTMLImageElement
      expect(screen.getByText(podcast.title)).toBeTruthy()
      expect(screen.getByText(`Author: ${podcast.author}`)).toBeTruthy()
      expect(image.alt).toContain('cover image')
    })
  })
})
