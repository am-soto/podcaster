import { usePodcasts } from '@/controller/usePodcasts'
import Filter from '@/presentation/components/filter'
import FilterSkeleton from '@/presentation/components/filter-skeleton'
import PodcastCardList from '@/presentation/components/podcast-card-list'
import PodcastCardListSkeleton from '@/presentation/components/podcast-card-list-skeleton'
import { Box } from '@mui/material'

const PodcastListPage = () => {
  const { filter, podcasts, saveFilter } = usePodcasts()

  return podcasts.length > 0 ? (
    <>
      <Box display='flex' justifyContent='flex-end' mb={10}>
        <Filter quantity={podcasts.length} value={filter} onValueChange={saveFilter} />
      </Box>
      <PodcastCardList podcasts={podcasts} />
    </>
  ) : (
    <>
      <FilterSkeleton />
      <PodcastCardListSkeleton />
    </>
  )
}

export default PodcastListPage
