import { usePodcast } from '@/controller/usePodcast'
import EpisodesCounter from '@/presentation/components/episodes-counter'
import EpisodesList from '@/presentation/components/episodes-list'
import { useParams } from 'react-router-dom'
import { Box, Skeleton } from '@mui/material'

const PodcastPage = () => {
  const { podcastId } = useParams()
  const { podcast } = usePodcast(podcastId ?? '')

  return podcast !== null ? (
    <Box>
      <EpisodesCounter episodes={podcast?.episodes} />
      <EpisodesList episodes={podcast?.episodes} />
    </Box>
  ) : (
    <Box>
      <Skeleton variant='rounded' height={75} sx={{ marginBottom: 2 }} />
      <Skeleton variant='rounded' height={1250} />
    </Box>
  )
}

export default PodcastPage
