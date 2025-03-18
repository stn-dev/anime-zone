import CardAnime from '../components/CardAnime'
import Container from '../components/Container'

function Anime() {
  return (
    <Container tag='section' className='min-h-screen grid grid-cols-1 gap-5 items-center justify-center pt-[100px] sm:grid-cols-2 xl:grid-cols-3'>
      {
        Array.from({ length: 10 }, (_, id) => {
          return (
            <CardAnime
              id={id.toString()}
              title='pokemon'
              date={1990}
              imageSrc='src/assets/481903.png'
              rating={8.5}
            />
          )
        })
      }
    </Container>
  )
}

export default Anime