import { Podcast } from '@/domain/models/Podcast'
import { PodcastDetail } from '../dtos/PodcastDetail'

export function podcastDetailToPodcast(podcastDetail: PodcastDetail): Podcast {
  const first = podcastDetail.results.shift()
  return {
    id: first?.collectionId.toString() ?? '',
    image: first?.artworkUrl600 ?? '',
    title: first?.collectionName ?? '',
    author: first?.artistName ?? '',
    description: '',
    episodes: podcastDetail.results.map((result) => {
      return {
        id: result.trackId.toString() ?? '',
        title: result.trackName ?? '',
        date: result.releaseDate ?? '',
        duration: result.trackTimeMillis.toString() ?? '',
        description: result.description ?? ''
      }
    })
  }
}
