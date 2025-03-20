import Button from '../components/Button'
import Container from '../components/Container'

function Home() {
  return (
    <Container tag='section' className=' h-screen flex flex-col gap-[40px] justify-center text-5xl relative overflow-hidden 2xl:gap-16 items-center  '>
      <h1 className=' flex flex-col items-center justify-center text-transparent text-stroke font-jaro text-7xl md:text-8xl xl:text-[170px] tracking-wider z-[5]' >
        <span className='  stroke-neutre' style={{ WebkitTextStroke: '1.5px #e5e5e5' }}> Dive into </span>
        <span className=' stroke-contrasted' style={{ WebkitTextStroke: '1.5px #fca311' }}> the world </span>
        <span className=' stroke-contrasted' style={{ WebkitTextStroke: '1.5px #fca311' }}>  of anime </span>
      </h1>
      <div className='flex items-center justify-center gap-5 xl:gap-[48px]  z-[5]' >
        <Button label='Characters' />
        <Button label='Animé' variant='stroked' />
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