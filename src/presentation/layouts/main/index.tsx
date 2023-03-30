import { Box } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <nav>
        <Link to='/'>Podcaster</Link>
      </nav>
      <Box sx={{ margin: 'auto', maxWidth: '1440px', paddingX: '25px' }}>
        <Outlet />
      </Box>
    </>
  )
}
export default MainLayout
