import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { PodcastHTTPRepository } from './PodcastHTTPRepository'

describe('PodcastHTTPRepository', () => {
  it('findAll', async () => {
    const podcastHTTPRepository = new PodcastHTTPRepository()
    expect(await podcastHTTPRepository.findAll()).toEqual(podcastModel)
  })

  it('findEpisodesById', async () => {
    const podcastHTTPRepository = new PodcastHTTPRepository()
    expect(
      (await podcastHTTPRepository.findEpisodesById(podcastDetailsModel.id))
        .map((e) => e.title)
        .sort()
    ).toEqual(podcastDetailsModel.episodes.map((e) => e.title).sort())
  })
})
