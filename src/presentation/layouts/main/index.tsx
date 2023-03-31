import CustomLink from '@/presentation/components/custom-link'
import NavBar from '@/presentation/components/nav-bar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const MainLayout = () => {
  return (
    <RecoilRoot>
      <NavBar />
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
    </RecoilRoot>
  )
}
export default MainLayout
