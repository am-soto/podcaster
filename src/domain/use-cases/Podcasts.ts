import { PodcastHTTPRepository } from '@/data/repositories/PodcastHTTPRepository'
import { Podcast } from '../models/Podcast'
import { IPodcasts } from './IPodcasts'

export class Podcasts implements IPodcasts {
  private podcastsRepository = new PodcastHTTPRepository()
  async getAll(): Promise<Podcast[]> {
    return await this.podcastsRepository.findAll()
  }
}
