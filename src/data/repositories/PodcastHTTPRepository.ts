import { Episode } from '@/domain/models/Episode'
import { Podcast } from '@/domain/models/Podcast'
import { get } from '@/shared/api'
import { AllowOriginsResponse } from '../dtos/AllowOriginsResponse'
import { ItunesResponse } from '../dtos/ITunesResponse'
import { PodcastDetail } from '../dtos/PodcastDetail'
import { feedToPodcasts } from '../mappers/feedToPodcasts'
import { podcastDetailToPodcast } from '../mappers/podcastDetailToPodcast'
import { responseTo } from '../mappers/responseTo'
import { IPodcastHTTPRepository } from './IPodcastHTTPRepository'

export class PodcastHTTPRepository implements IPodcastHTTPRepository {
  async findAll(): Promise<Podcast[]> {
    const response = await get<AllowOriginsResponse>(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      )}`
    )
    const { feed } = responseTo<ItunesResponse>(response)
    return feedToPodcasts(feed)
  }

  async findEpisodesById(id: string): Promise<Episode[]> {
    const response = await get<AllowOriginsResponse>(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    )
    const podcastDetail = responseTo<PodcastDetail>(response)
    return podcastDetailToPodcast(podcastDetail).episodes
  }
}
