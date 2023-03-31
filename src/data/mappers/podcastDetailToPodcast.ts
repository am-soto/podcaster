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
        date: new Date(result.releaseDate).toLocaleString().split(',')[0] ?? '',
        duration: new Date(result.trackTimeMillis).toISOString().slice(11, 19) ?? '',
        description: result.description ?? '',
        audio: result.episodeUrl ?? ''
      }
    })
  }
}
