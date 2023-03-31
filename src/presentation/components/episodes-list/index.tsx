import { Episode } from '@/domain/models/Episode'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material'
import { useParams } from 'react-router-dom'
import CustomLink from '../custom-link'

interface Props {
  episodes: Episode[]
}

const EpisodesList = ({ episodes }: Props) => {
  const { podcastId } = useParams()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell>
                <CustomLink to={`/podcasts/${podcastId}/episodes/${episode.id}`}>
                  <Typography color='primary'>{episode.title}</Typography>
                </CustomLink>
              </TableCell>
              <TableCell>{episode.date}</TableCell>
              <TableCell>{episode.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EpisodesList
