import { podcastDetailsModel } from '@/mocks/api/podcastDetails'
import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { Podcasts } from './Podcasts'

describe('Podcasts', () => {
  it('getAll', async () => {
    const podcasts = new Podcasts()
    expect(await podcasts.getAll()).toEqual(podcastModel)
  })
  it('getId', async () => {
    const podcasts = new Podcasts()
    expect((await podcasts.getById(podcastDetailsModel.id)).title).toEqual(
      podcastDetailsModel.title
    )
  })
})
