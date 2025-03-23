import Container from '../components/Container'
import HeightLight from '../components/HeightLight'
import Input from '../components/Input'

function Home() {
  return (
    <Container
      tag='section'
      className=' min-h-screen flex flex-col gap-[40px] justify-center text-5xl relative overflow-hidden 2xl:gap-16 items-center pt-[100px] pb-[50px] '
    >
      {/* Title */}
      <h1 className=' flex flex-col items-center justify-center text-transparent text-stroke font-jaro text-7xl md:text-8xl xl:text-[170px] tracking-wider z-[5]' >
        <span className='  stroke-neutre' style={{ WebkitTextStroke: '1.5px #e5e5e5' }}> Dive into </span>
        <span className=' stroke-contrasted' style={{ WebkitTextStroke: '1.5px #fca311' }}> the world </span>
        <span className=' stroke-contrasted' style={{ WebkitTextStroke: '1.5px #fca311' }}>  of anime </span>
      </h1>
      {/* <div className='flex items-center justify-center gap-5 xl:gap-[48px] relative z-[5]' >
        <Button label='Characters' />
        <Button label='Animé' variant='stroked' />
      </div> */}
      {/*search */}
      <div className=' w-[250px] md:w-[400px] ' >
        <Input
          placeholder='Search anime or character...'
          className='relative z-[5]'
        />
      </div>

      {/* background image */}
      <img
        src="src/assets/home-image.png"
        alt="anime-image"
        className='absolute top-[2%] translate-y-[-2%] md:top-[0%] left-[50%] translate-x-[-50%]  opacity-30 w-[100vh] h-auto  '
      />

      {/* heightligth anime*/}
      <HeightLight title={'Top animé'} data={3} link='anime' />

      {/* heightligth charcters*/}
      <HeightLight title={'Top characters'} data={3} link='characters' />
    </Container>
  )
}

export default Home