import Container from '../components/Container'
import { Outlet } from 'react-router'
import AnimeHeader from '../components/AnimeHeader'
import useScrollToTop from '../hooks/useScrollTop'

function Anime() {
  useScrollToTop()
  return (
    <Container tag='section' className=' relative min-h-screen pt-[70px] xl:pt-[100px] pb-[50px]'>
      <AnimeHeader />
      <Outlet />
    </Container >
  )
}

export default Anime