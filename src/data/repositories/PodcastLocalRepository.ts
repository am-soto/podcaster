import { Podcast } from '@/domain/models/Podcast'
import { get, set } from '@/shared/local'
import { IPodcastLocalRepository } from './IPodcastLocalRepository'

export class PodcastLocalRepository implements IPodcastLocalRepository {
  private LIST_KEY = 'PODCAST_LIST'
  private ONE_KEY = 'PODCAST'

  saveAll(podcasts: Podcast[]): void {
    set(this.LIST_KEY, podcasts)
  }

  findAll(): Podcast[] {
    return get(this.LIST_KEY) ?? []
  }

  save(podcast: Podcast): void {
    set(`${this.ONE_KEY}_${podcast.id}`, podcast)
  }

  find(id: string): Podcast | null {
    return get(`${this.ONE_KEY}_${id}`)
  }
}
