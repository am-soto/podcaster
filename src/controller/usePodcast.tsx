import { Episode } from '@/domain/models/Episode'
import { Podcast } from '@/domain/models/Podcast'
import { Podcasts } from '@/domain/use-cases/Podcasts'
import { useEffect, useState } from 'react'

interface IUsePodcast {
  podcast: Podcast | null
  getEpisode: (id: string) => Episode | null
}

export const usePodcast = (id: string): IUsePodcast => {
  const [podcast, setPodcast] = useState<Podcast | null>(null)
  const podcastsUseCase = new Podcasts()

  const getPodcast = () => {
    podcastsUseCase.getById(id).then((p) => setPodcast(p))
  }

  const getEpisode = (id: string) => {
    return podcast?.episodes.filter((e) => e.id === id)[0] ?? null
  }

  useEffect(() => {
    getPodcast()
  }, [])

  return {
    podcast,
    getEpisode
  }
}
