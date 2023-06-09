import { Podcast } from '@/domain/models/Podcast'
import { Podcasts } from '@/domain/use-cases/Podcasts'
import { useEffect, useState } from 'react'
import { useLoading } from './useLoading'

interface IUsePodcast {
  filter: string
  podcasts: Podcast[]
  saveFilter: (newFilter: string) => void
}

export const usePodcasts = (): IUsePodcast => {
  const { updateLoading } = useLoading()
  const [filter, setFilter] = useState('')
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const podcastsUseCase = new Podcasts()

  const filterPodcasts = () => {
    return podcasts.filter(
      (value) =>
        value.author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        value.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
  }

  const getPodcasts = async () => {
    updateLoading(true)
    await podcastsUseCase.getAll().then((r) => setPodcasts(r))
    updateLoading(false)
  }

  const saveFilter = (newFilter: string) => {
    setFilter(newFilter)
  }

  useEffect(() => {
    getPodcasts()
  }, [])

  return {
    filter,
    podcasts: filterPodcasts(),
    saveFilter
  }
}
