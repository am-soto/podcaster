import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <nav>
        <Link to='/'>Podcaster</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default MainLayout
