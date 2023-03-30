import { Podcast } from '@/domain/models/Podcast'

export interface IPodcastLocalRepository {
  findAll(): Podcast[]
  saveAll(podcasts: Podcast[]): void
}
