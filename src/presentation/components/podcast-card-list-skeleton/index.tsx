import { Grid, Skeleton } from '@mui/material'

const PodcastCardListSkeleton = () => (
  <>
    {Array.from(Array(100).keys()).map((i) => (
      <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
        <Skeleton variant='rounded' height={250} />
      </Grid>
    ))}
  </>
)

export default PodcastCardListSkeleton
