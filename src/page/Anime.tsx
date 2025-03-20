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
      // const char = await animeClient.characters.getCharacterFullById(5)
      // console.log(char.data)
      setTopAnime(anime.data)
    }
    gatAnime()
  }, [])
  return (
    <Container tag='section' className='min-h-screen grid grid-cols-1 gap-5 items-center justify-center pt-[100px] md:grid-cols-2 xl:grid-cols-3'>
      {
        topAnime?.map((anime) => {
          return (
            <CardAnime
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              date={anime.year}
              imageSrc={anime.images.jpg.image_url}
              rating={anime.score}
              genres={anime.genres}
            />
          )
        })
      }
    </Container>
  )
}

export default Anime