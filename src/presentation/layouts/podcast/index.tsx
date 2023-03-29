import { Outlet } from 'react-router-dom'

const PodcastLayout = () => {
  return (
    <>
      <div>Podcast Information Card</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
export default PodcastLayout
