import { Podcast } from '@/domain/models/Podcast'
import { get, set } from '@/shared/local'
import { IPodcastLocalRepository } from './IPodcastLocalRepository'

export class PodcastLocalRepository implements IPodcastLocalRepository {
  private key = 'PODCAST_LIST'

  saveAll(podcasts: Podcast[]): void {
    set(this.key, podcasts)
  }

  findAll(): Podcast[] {
    return get(this.key) ?? []
  }
}
