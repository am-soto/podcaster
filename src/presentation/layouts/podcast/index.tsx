import { usePodcast } from '@/controller/usePodcast'
import { Outlet, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import PodcastDetailsCard from '@/presentation/components/podcast-details-card'
import CustomLink from '@/presentation/components/custom-link'

const PodcastLayout = () => {
  const { podcastId } = useParams()
  const { podcast } = usePodcast(podcastId ?? '')
  return (
    <Grid container spacing={10} rowSpacing={10}>
      <Grid item xs={4}>
        {podcast !== null && (
          <CustomLink to={`/podcast/${podcastId}`}>
            <PodcastDetailsCard podcast={podcast} />
          </CustomLink>
        )}
      </Grid>
      <Grid item xs={8}>
        <Outlet context={podcast} />
      </Grid>
    </Grid>
  )
}
export default PodcastLayout
