import { Episode } from '@/domain/models/Episode'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

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
                <Link to={`/podcasts/${podcastId}/episodes/${episode.id}`}>{episode.title}</Link>
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
