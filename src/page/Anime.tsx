import { JikanClient } from '@tutkli/jikan-ts'
import CardAnime from '../components/CardAnime'
import Container from '../components/Container'
import type { Anime } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'

function Anime() {
  const [topAnime, setTopAnime] = useState<Anime[]>()
  const animeClient = new JikanClient()
  useEffect(() => {
    const gatAnime = async () => {
      const anime = await animeClient.top.getTopAnime()
      setTopAnime(anime.data)
    }
    gatAnime()
  }, [])
  return (
    <Container tag='section' className='min-h-screen grid grid-cols-1 gap-5 items-center justify-center pt-[100px] sm:grid-cols-2 xl:grid-cols-3'>
      {
        topAnime?.map((anime) => {
          return (
            <CardAnime
              id={anime.mal_id}
              title={anime.title}
              date={anime.year}
              imageSrc={anime.images.jpg.image_url}
              rating={anime.score}
            />
          )
        })
      }
    </Container>
  )
}

export default Anime