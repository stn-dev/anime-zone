import Button from '../components/Button'
import Container from '../components/Container'

function Home() {
  return (
    <Container tag='section' className=' h-screen flex flex-col gap-16 items-center justify-center text-5xl relative overflow-hidden '>
      <h1 className='flex flex-col items-center justify-center text-transparent text-stroke font-jaro text-[170px] tracking-wider z-10' >
        <span className='  stroke-neutre' style={{ WebkitTextStroke: '1.5px #e5e5e5' }}> Dive into </span>
        <span className=' stroke-contrasted' style={{ WebkitTextStroke: '1.5px #fca311' }}> the world of anime </span>
      </h1>
      <div className='flex items-center justify-center gap-[48px] text-xl font-semibold z-10' >
        <Button label='Characters' variant='stroked' />
        <Button label='Animé' />
      </div>
      <img
        src="src/assets/home-image.png"
        alt="anime-image"
        className='absolute bottom-0 left-[50%] translate-x-[-50%] opacity-30 w-[60vh] h-auto  '
      />
    </Container>
  )
}

export default Home