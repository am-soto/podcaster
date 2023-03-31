import { Podcast } from '@/domain/models/Podcast'
import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

interface Props {
  podcast: Podcast
}

const PodcastDetailsCard = ({ podcast }: Props) => {
  return (
    <Card>
      <Box p={3}>
        <CardMedia component='img' image={podcast.image} alt='cover image' />
      </Box>
      <Divider />
      <CardContent>
        <Typography variant='h6' component='h6'>
          {podcast.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' fontStyle='italic'>
          by {podcast.author}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant='body2' fontWeight={600}>
          Description:
        </Typography>
        <Typography variant='body2' color='text.secondary' fontStyle='italic'>
          {podcast.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PodcastDetailsCard
