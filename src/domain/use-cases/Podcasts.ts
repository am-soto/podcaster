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

  async getById(id: string): Promise<Podcast> {
    const localPodcast = this.podcastsLocalRepository.find(id)

    if (localPodcast === null) {
      const podcast = (await this.getAll()).filter((p) => p.id === id)[0]
      const episodes = await this.podcastsHTTPRepository.findEpisodesById(podcast.id)
      podcast.episodes = [...episodes]
      this.podcastsLocalRepository.save(podcast)
      return podcast
    }
    return localPodcast
  }
}
