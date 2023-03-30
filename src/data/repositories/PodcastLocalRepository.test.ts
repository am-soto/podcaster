import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { PodcastLocalRepository } from './PodcastLocalRepository'

describe('PodcastLocalRepository', () => {
  it('saveAll and findAll', async () => {
    const podcastLocalRepository = new PodcastLocalRepository()
    podcastLocalRepository.saveAll(podcastModel)
    expect(podcastLocalRepository.findAll()).toEqual(podcastModel)
  })
  it('save and find', async () => {
    const podcastLocalRepository = new PodcastLocalRepository()
    podcastLocalRepository.save(podcastDetailsModel)
    expect(podcastLocalRepository.find(podcastDetailsModel.id)).toEqual(podcastDetailsModel)
  })
})
