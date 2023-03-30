import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { PodcastHTTPRepository } from './PodcastHTTPRepository'

describe('PodcastHTTPRepository', () => {
  it('findAll', async () => {
    const podcastHTTPRepository = new PodcastHTTPRepository()
    expect(await podcastHTTPRepository.findAll()).toEqual(podcastModel)
  })
})
