import { usePodcast } from '@/controller/usePodcast'
import EpisodesPlayer from '@/presentation/components/episode-player'
import { useParams } from 'react-router-dom'

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams()
  const { getEpisode } = usePodcast(podcastId ?? '')
  return <EpisodesPlayer episode={getEpisode(episodeId ?? '')} />
}

export default EpisodePage
