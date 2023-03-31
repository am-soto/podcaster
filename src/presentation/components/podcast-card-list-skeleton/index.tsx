import { Grid, Skeleton } from '@mui/material'

const PodcastCardListSkeleton = () => (
  <Grid container spacing={4} rowSpacing={10}>
    {Array.from(Array(100).keys()).map((i) => (
      <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
        <Skeleton variant='rounded' height={250} />
      </Grid>
    ))}
  </Grid>
)

export default PodcastCardListSkeleton
