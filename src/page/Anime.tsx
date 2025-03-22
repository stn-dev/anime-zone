import { JikanClient } from '@tutkli/jikan-ts'
import CardAnime from '../components/CardAnime'
import Container from '../components/Container'
import type { Anime } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { dbZnData, narutoData, onepieceData, pokemonData } from '../services/data'

function Anime() {
  const [topAnime, setTopAnime] = useState<Anime[]>()
  const animeClient = new JikanClient()
  const [currentage, setCurrentPage] = useState(1)
  const data = [...pokemonData, ...dbZnData, ...narutoData, ...onepieceData]
  const itemPerPage = 5
  const dataLength = data.length
  const lastItem = currentage * itemPerPage
  const firstItem = lastItem - itemPerPage
  const dataFiltered = data.slice(firstItem, lastItem)


  useEffect(() => {
    const gatAnime = async () => {
      // const anime = await animeClient.top.getTopAnime()
      // setTopAnime(anime.data)
      // console.log(anime.data)
    }
    gatAnime()
  }, [])
  return (
    <Container tag='section' className='min-h-screen pb-[50px] flex flex-col items-center justify-center gap-10'>
      {/* {
        topAnime?.map((anime) => {
          return (
            <CardAnime
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              episode={anime.episodes}
              imageSrc={anime.images.jpg.large_image_url!}
              genres={anime.genres}
            />
          )
        })
      } */}
      <div className='grid grid-cols-1 gap-5 items-center justify-center pt-[100px] md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
        {
          dataFiltered.map((anime, id) => {
            return (
              <CardAnime
                key={id}
                id={id}
                title={anime}
                episode={20}
                imageSrc={"/src/assets/home-image.png"}
                genres={[{ name: "comedie" }]}
              />
            )
          })
        }
      </div>
      <div className='flex flex-wrap items-center justify-center gap-3 md:gap-5' >
        {
          Array.from({ length: Math.ceil(dataLength / itemPerPage) }, (_, id) => {
            return (
              <button
                key={id}
                onClick={() => setCurrentPage(id + 1)}
                className={`w-fit h-fit px-4 py-2 md:px-5 md:py-3 border border-contrasted rounded-lg font-semibold text-xl ${id + 1 === currentage ? 'text-dark bg-contrasted' : 'text-contrasted bg-transparent '}`}
              >
                {id + 1}
              </button>
            )
          })
        }
      </div>
    </Container>
  )
}

export default Anime