import { Podcast } from '@/domain/models/Podcast'

interface Props {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: Props) => {
  return (
    <div>
      <img src={podcast.image} alt='cover image' />
      <p>{podcast.title}</p>
      <p>Author: {podcast.author}</p>
    </div>
  )
}

export default PodcastCard
