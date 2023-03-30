import { Episode } from '@/domain/models/Episode'
import { Card, CardContent, Typography } from '@mui/material'

interface Props {
  episodes: Episode[]
}

const EpisodesCounter = ({ episodes }: Props) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant='h6' component='h6'>
          Episodes: {episodes.length}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EpisodesCounter
