import { usePodcasts } from '@/controller/usePodcasts'
import Filter from '@/presentation/components/filter'
import PodcastCardList from '@/presentation/components/podcast-card-list'
import { Box } from '@mui/material'

const PodcastListPage = () => {
  const { filter, podcasts, saveFilter } = usePodcasts()

  return (
    <>
      <Box display='flex' justifyContent='flex-end' mb={10}>
        <Filter quantity={podcasts.length} value={filter} onValueChange={saveFilter} />
      </Box>
      <PodcastCardList podcasts={podcasts} />
    </>
  )
}

export default PodcastListPage
