import { JikanClient } from '@tutkli/jikan-ts'
import Container from '../components/Container'
import type { Anime } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { dbZnData, narutoData, onepieceData, pokemonData, selectFilterData } from '../services/data'
import Select from '../components/Select'
import Card from '../components/CardAnime'
import CardAnime from '../components/CardAnime'
import SkeletonGroup from '../components/SkeletonGroup'

function Anime() {
  const [topAnime, setTopAnime] = useState<Anime[]>()
  const [loading, setIloading] = useState<boolean>(false)
  const animeClient = new JikanClient()
  const [currentPage, setCurrentPage] = useState(1)
  const [select, setselect] = useState("all")
  const data = [...pokemonData, ...dbZnData, ...narutoData, ...onepieceData]
  const itemPerPage = 6
  const lastItem = currentPage * itemPerPage
  const firstItem = lastItem - itemPerPage
  const dataFiltered = data.filter((anime) => {
    if (select !== "all") {
      return anime.toLocaleLowerCase().includes(select.toLowerCase() as string)
    } else {
      return anime
    }
  })
  const URL = import.meta.env.BASE_URL
  const pagination = dataFiltered.slice(firstItem, lastItem)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselect(e.target.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    const gatAnime = async () => {
      const anime = await animeClient.top.getTopAnime()
      setTopAnime(anime.data)
      console.log(anime.data)
    }
    const fetchAnime = async () => {
      try {
        setIloading(true)
        console.log(URL)
        const request = await fetch(`https://api.jikan.moe/v4/anime`)
        const res = await request.json()
        setTopAnime(res.data)
        setIloading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIloading(false)
      }
    }
    fetchAnime()
    // gatAnime()
  }, [])
  return (
    <Container tag='section' className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {
        loading ? (
          <SkeletonGroup />
        ) : (
          <div className='grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
            {
              topAnime?.map((anime) => {
                return (
                  <CardAnime
                    key={anime.mal_id}
                    id={anime.mal_id}
                    title={anime.title}
                    episode={anime.episodes}
                    imageSrc={anime.images.jpg.large_image_url!}
                    genres={anime.genres}
                    isFullData={true}
                  />
                )
              })
            }
          </div>
        )
      }
      {/* <div className='w-full grid grid-cols-5 grid-rows-1 gap-5'>
        <Select
          name='filter'
          onChange={handleChange}
          options={selectFilterData}
        />
      </div>
      <div className='grid grid-cols-1 gap-5 items-center justify-center  md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
        {
          pagination.map((anime, id) => {
            return (
              <Card
                key={id}
                id={id}
                link='anime'
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
          Array.from({ length: Math.ceil(dataFiltered.length / itemPerPage) }, (_, id) => {
            return (
              <button
                key={id}
                onClick={() => setCurrentPage(id + 1)}
                className={`w-fit h-fit px-4 py-2 md:px-5 md:py-3 border border-contrasted rounded-lg font-semibold text-xl hover:cursor-pointer ${id + 1 === currentPage ? 'text-dark bg-contrasted' : 'text-contrasted bg-transparent '}`}
              >
                {id + 1}
              </button>
            )
          })
        } */}
      {/* </div> */}
    </Container >
  )
}

export default Anime