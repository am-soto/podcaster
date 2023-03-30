import { usePodcast } from '@/controller/usePodcast'
import PodcastCardList from '@/presentation/components/podcast-card-list'
import { Link } from 'react-router-dom'

const PodcastListPage = () => {
  const { podcasts } = usePodcast()

  return (
    <>
      Podcast List: <Link to='/podcasts/1'>1</Link>
      <PodcastCardList podcasts={podcasts} />
    </>
  )
}

export default PodcastListPage
