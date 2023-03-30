import { Podcast } from '@/domain/models/Podcast'
import { Podcasts } from '@/domain/use-cases/Podcasts'
import { useEffect, useState } from 'react'

interface IUsePodcast {
  podcasts: Podcast[]
}

export const usePodcast = (): IUsePodcast => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const podcastsUseCase = new Podcasts()

  const getPodcasts = async () => {
    await podcastsUseCase.getAll().then((r) => setPodcasts(r))
  }

  useEffect(() => {
    getPodcasts()
  }, [])

  return {
    podcasts
  }
}
