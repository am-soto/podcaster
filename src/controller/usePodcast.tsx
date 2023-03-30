import { Podcast } from '@/domain/models/Podcast'
import { Podcasts } from '@/domain/use-cases/Podcasts'
import { useEffect, useState } from 'react'

interface IUsePodcast {
  podcast: Podcast | null
}

export const usePodcast = (id: string): IUsePodcast => {
  const [podcast, setPodcast] = useState<Podcast | null>(null)
  const podcastsUseCase = new Podcasts()

  const getPodcast = () => {
    podcastsUseCase.getById(id).then((p) => setPodcast(p))
  }

  useEffect(() => {
    getPodcast()
  }, [])

  return {
    podcast
  }
}
