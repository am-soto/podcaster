import { Box, Skeleton } from '@mui/material'

const FilterSkeleton = () => (
  <Box display='flex' justifyContent='flex-end' mb={10} gap={2}>
    <Skeleton variant='circular' width={40} height={40} />
    <Skeleton variant='rounded' width={250} height={40} />
  </Box>
)

export default FilterSkeleton
