import { Episode } from './Episode'

export interface Podcast {
  id: string
  image: string
  title: string
  author: string
  description: string
  episodes: Episode[]
}
