import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { PodcastLocalRepository } from './PodcastLocalRepository'

describe('PodcastLocalRepository', () => {
  it('saveAll and findAll', async () => {
    const podcastLocalRepository = new PodcastLocalRepository()
    podcastLocalRepository.saveAll(podcastModel)
    expect(podcastLocalRepository.findAll()).toEqual(podcastModel)
  })
})
