import { Podcast } from '@/domain/models/Podcast'
import PodcastCard from '../podcast-card'

interface Props {
  podcasts: Podcast[]
}

const PodcastCardList = ({ podcasts }: Props) => {
  return (
    <>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </>
  )
}

export default PodcastCardList
