import { Podcast } from '@/domain/models/Podcast'
import { Grid } from '@mui/material'
import PodcastCard from '../podcast-card'

interface Props {
  podcasts: Podcast[]
}

const PodcastCardList = ({ podcasts }: Props) => {
  return (
    <Grid container spacing={4} rowSpacing={10}>
      {podcasts.map((podcast) => (
        <Grid key={podcast.id} item xs={12} sm={6} md={4} lg={3}>
          <PodcastCard podcast={podcast} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PodcastCardList
