import CustomLink from '@/presentation/components/custom-link'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <AppBar position='static' color='transparent' sx={{ marginBottom: 5 }}>
        <Toolbar variant='dense'>
          <CustomLink to='/'>
            <Typography variant='h6' color='primary' component='div'>
              Podcaster
            </Typography>
          </CustomLink>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: 'auto', maxWidth: '1440px', paddingX: '25px' }}>
        <Outlet />
      </Box>
      <Box justifyContent='center' display='flex' pt={6} pb={3}>
        <CustomLink
          to='https://github.com/am-soto/podcaster'
          target='_blank'
          rel='noopener noreferrer'
        >
          🚀
        </CustomLink>
      </Box>
    </>
  )
}
export default MainLayout
