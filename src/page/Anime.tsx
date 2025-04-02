import Container from '../components/Container'
import { Outlet } from 'react-router'
import AnimeHeader from '../components/AnimeHeader'

function Anime() {

  return (
    <Container tag='section' className='min-h-screen pt-[100px] pb-[50px]'>
      <AnimeHeader />
      <Outlet />
    </Container >
  )
}

export default Anime