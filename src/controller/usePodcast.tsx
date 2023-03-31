import { Episode } from '@/domain/models/Episode'
import { Podcast } from '@/domain/models/Podcast'
import { Podcasts } from '@/domain/use-cases/Podcasts'
import { useEffect, useState } from 'react'
import { useLoading } from './useLoading'

interface IUsePodcast {
  podcast: Podcast | null
  getEpisode: (id: string) => Episode | null
}

export const usePodcast = (id: string): IUsePodcast => {
  const { updateLoading } = useLoading()
  const [podcast, setPodcast] = useState<Podcast | null>(null)
  const podcastsUseCase = new Podcasts()

  const getPodcast = async () => {
    updateLoading(true)
    await podcastsUseCase.getById(id).then((p) => setPodcast(p))
    updateLoading(false)
  }

  const getEpisode = (id: string) => {
    const episode = podcast?.episodes.filter((e) => e.id === id)[0] ?? null
    return episode
  }

  useEffect(() => {
    getPodcast()
  }, [])

  return {
    podcast,
    getEpisode
  }
}
