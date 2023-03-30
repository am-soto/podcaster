import { PodcastHTTPRepository } from '@/data/repositories/PodcastHTTPRepository'
import { PodcastLocalRepository } from '@/data/repositories/PodcastLocalRepository'
import { Podcast } from '../models/Podcast'
import { IPodcasts } from './IPodcasts'

export class Podcasts implements IPodcasts {
  private podcastsHTTPRepository = new PodcastHTTPRepository()
  private podcastsLocalRepository = new PodcastLocalRepository()
  async getAll(): Promise<Podcast[]> {
    const localPodcasts = this.podcastsLocalRepository.findAll()

    if (localPodcasts.length === 0) {
      const remotePodcasts = await this.podcastsHTTPRepository.findAll()
      this.podcastsLocalRepository.saveAll(remotePodcasts)
      return remotePodcasts
    }
    return localPodcasts
  }
}
