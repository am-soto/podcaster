import { Podcast } from '@/domain/models/Podcast'
import { get } from '@/shared/api'
import { AllowOriginsResponse } from '../dtos/AllowOriginsResponse'
import { ItunesResponse } from '../dtos/ITunesResponse'
import { feedToPodcasts } from '../mappers/feedToPodcasts'
import { responseTo } from '../mappers/responseTo'
import { IPodcastHTTPRepository } from './IPodcastHTTPRepository'

export class PodcastHTTPRepository implements IPodcastHTTPRepository {
  async findAll(): Promise<Podcast[]> {
    const response = await get<AllowOriginsResponse>(
      'https://api.allorigins.win/get?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    )
    const { feed } = responseTo<ItunesResponse>(response)
    return feedToPodcasts(feed)
  }
}
