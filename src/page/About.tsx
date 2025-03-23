import Container from '../components/Container'
import SkeletonGroup from '../components/SkeletonGroup'


function About() {
  return (
    <Container tag='section' className='min-h-screen flex items-center justify-center pb-[50px]'>
      <SkeletonGroup />
    </Container>
  )
}

export default About