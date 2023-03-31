import { Box, Skeleton } from '@mui/material'

const EpisodesListSkeleton = () => (
  <Box>
    <Skeleton variant='rounded' height={75} sx={{ marginBottom: 2 }} />
    <Skeleton variant='rounded' height={1250} />
  </Box>
)

export default EpisodesListSkeleton
