import { Episode } from '@/domain/models/Episode'
import { Podcast } from '@/domain/models/Podcast'

export interface IPodcastHTTPRepository {
  findAll(): Promise<Podcast[]>
  findEpisodesById(id: string): Promise<Episode[]>
}
