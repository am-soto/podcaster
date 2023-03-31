import { useLoading } from '@/controller/useLoading'
import { AppBar, CircularProgress, Toolbar, Typography } from '@mui/material'
import CustomLink from '../custom-link'

const NavBar = () => {
  const { loading } = useLoading()
  return (
    <AppBar position='static' color='transparent' sx={{ marginBottom: 5 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomLink to='/'>
          <Typography variant='h6' color='primary' component='div'>
            Podcaster
          </Typography>
        </CustomLink>
        {loading && <CircularProgress size={20} />}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
