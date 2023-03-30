import { podcastModel } from '@/mocks/api/podcasts'
import { describe, expect, it } from 'vitest'
import { Podcasts } from './Podcasts'

describe('Podcasts', () => {
  it('findAll', async () => {
    const podcasts = new Podcasts()
    expect(await podcasts.getAll()).toEqual(podcastModel)
  })
})
