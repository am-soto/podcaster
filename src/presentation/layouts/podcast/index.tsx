import { usePodcast } from '@/controller/usePodcast'
import { Outlet, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import PodcastDetailsCard from '@/presentation/components/podcast-details-card'

const PodcastLayout = () => {
  const { podcastId } = useParams()
  const { podcast } = usePodcast(podcastId ?? '')
  return (
    <Grid container spacing={4} rowSpacing={10}>
      <Grid item xs={4}>
        {podcast !== null && <PodcastDetailsCard podcast={podcast} />}
      </Grid>
      <Grid item xs={8}>
        <Outlet context={podcast} />
      </Grid>
    </Grid>
  )
}
export default PodcastLayout
