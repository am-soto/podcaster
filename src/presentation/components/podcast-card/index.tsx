import { Podcast } from '@/domain/models/Podcast'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: Props) => {
  return (
    <Link to={`/podcasts/${podcast.id}`} style={{ textDecoration: 'none' }}>
      <CardMedia
        sx={{ borderRadius: '50%', cursor: 'pointer', margin: 'auto', width: '50%' }}
        component='img'
        image={podcast.image}
        alt='cover image'
      />
      <Card sx={{ marginTop: '-100px' }}>
        <CardContent sx={{ paddingTop: '100px' }}>
          <Typography variant='h6' component='h6' align='center'>
            {podcast.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' align='center'>
            Author: {podcast.author}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default PodcastCard
