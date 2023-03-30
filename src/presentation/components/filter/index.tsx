import { Box, Chip, TextField } from '@mui/material'

interface Props {
  quantity: number
  value: string
  onValueChange: (newValue: string) => void
}

const Filter = ({ quantity, value, onValueChange }: Props) => {
  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Chip label={quantity} color='primary' />
      <TextField
        size='small'
        label='Filter podcasts...'
        variant='outlined'
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </Box>
  )
}

export default Filter
