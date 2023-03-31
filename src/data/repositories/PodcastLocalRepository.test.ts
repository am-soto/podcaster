import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { podcastsModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { PodcastLocalRepository } from './PodcastLocalRepository'

describe('PodcastLocalRepository', () => {
  it('saveAll and findAll', async () => {
    const podcastLocalRepository = new PodcastLocalRepository()
    podcastLocalRepository.saveAll(podcastsModel)
    expect(podcastLocalRepository.findAll()).toEqual(podcastsModel)
  })
  it('save and find', async () => {
    const podcastLocalRepository = new PodcastLocalRepository()
    podcastLocalRepository.save(podcastDetailsModel)
    expect(podcastLocalRepository.find(podcastDetailsModel.id)).toEqual(podcastDetailsModel)
  })
})
