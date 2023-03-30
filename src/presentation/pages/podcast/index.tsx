import { usePodcast } from '@/controller/usePodcast'
import EpisodesCounter from '@/presentation/components/episodes-counter'
import EpisodesList from '@/presentation/components/episodes-list'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

const PodcastPage = () => {
  const { podcastId } = useParams()
  const { podcast } = usePodcast(podcastId ?? '')

  return podcast !== null ? (
    <Box>
      <EpisodesCounter episodes={podcast?.episodes} />
      <EpisodesList episodes={podcast?.episodes} />
    </Box>
  ) : (
    <></>
  )
}

export default PodcastPage
