import { Podcast } from '@/domain/models/Podcast'
import { Feed } from '../dtos/Feed'

export function feedToPodcasts(feed: Feed): Podcast[] {
  return feed.entry.map((e) => {
    return {
      id: e.id.attributes['im:id'],
      image: e['im:image'][e['im:image'].length - 1].label ?? '',
      title: e['im:name'].label,
      author: e['im:artist'].label,
      description: e.summary.label,
      episodes: []
    }
  })
}
