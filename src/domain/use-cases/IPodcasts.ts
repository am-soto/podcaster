import { Podcast } from '../models/Podcast'

export interface IPodcasts {
  getAll(): Promise<Podcast[]>
  getById(id: string): Promise<Podcast>
}
