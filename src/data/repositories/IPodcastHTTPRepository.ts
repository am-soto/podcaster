import { Podcast } from '@/domain/models/Podcast'

export interface IPodcastHTTPRepository {
  findAll(): Promise<Podcast[]>
}
