import { Episode } from '@/domain/models/Episode'
import { Card, CardContent, Divider, Skeleton, Typography } from '@mui/material'
import styled from '@emotion/styled'

interface Props {
  episode: Episode | null
}

const Audio = styled.audio`
  width: 100%;
`

const EpisodesPlayer = ({ episode }: Props) => {
  return episode !== null ? (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant='h4' component='h4' mb={2}>
          {episode.title}
        </Typography>
        {episode.description.split('\n').map((chunk, index) => (
          <Typography key={index} variant='body2' dangerouslySetInnerHTML={{ __html: chunk }} />
        ))}
        <Divider sx={{ marginY: 2 }} />
        <Audio src={episode.audio} controls />
      </CardContent>
    </Card>
  ) : (
    <Skeleton variant='rounded' height={625} />
  )
}

export default EpisodesPlayer
