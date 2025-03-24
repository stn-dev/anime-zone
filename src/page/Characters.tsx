import { JikanClient } from '@tutkli/jikan-ts'
import Container from '../components/Container'
import type { Anime, Character } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import { dbZnData, narutoData, onepieceData, pokemonData, selectFilterData } from '../services/data'
import Select from '../components/Select'
import { usePagination } from '../hooks/usePagination'
import Card from '../components/CardAnime'
import { useFetch } from '../hooks/useFetch'
import CardCharacters from '../components/CardCharacters'
import SkeletonGroup from '../components/SkeletonGroup'

function Characters() {
  const [characters, setCharacters] = useState<Character[]>()
  const [isLoading, setIsLoading] = useState(false)
  const animeClient = new JikanClient()
  const [currentPage, setCurrentPage] = useState(1)
  const [select, setselect] = useState("all")
  // const myData = [...pokemonData, ...dbZnData, ...narutoData, ...onepieceData]
  // const itemPerPage = 6
  // const lastItem = currentPage * itemPerPage
  // const firstItem = lastItem - itemPerPage
  // const dataFiltered = myData.filter((anime) => {
  //   if (select !== "all") {
  //     return anime.toLocaleLowerCase().includes(select.toLowerCase() as string)
  //   } else {
  //     return anime
  //   }
  // })
  // const pagination = dataFiltered.slice(firstItem, lastItem)
  // const { paginationLength, shownItems } = usePagination(currentPage, 9, dataFiltered)


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselect(e.target.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    const gatCharacters = async () => {
      setIsLoading(true)
      // const anime = await animeClient.top.getTopAnime()
      // setTopAnime(anime.data)
      // console.log(anime.data)
      try {
        const request = await fetch('https://api.jikan.moe/v4/top/characters')
        const response = await request.json()
        console.log(response.data)
        setCharacters(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIsLoading(false)
      }
    }
    gatCharacters()
    // console.log(data)
  }, [])
  return (
    <Container tag='section' className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {/* <div className='w-full grid grid-cols-5 grid-rows-1 gap-5'>
        <Select
          name='filter'
          onChange={handleChange}
          options={selectFilterData}
        />
      </div> */}
      {
        isLoading ? (<SkeletonGroup />) : (
          <div className=' w-full grid grid-cols-1 gap-5 items-center justify-center  md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
            {
              characters?.map((character) => {
                return (
                  <CardCharacters
                    key={character.mal_id}
                    id={character.mal_id.toString()}
                    name={character.name}
                    japan_name={character.name_kanji}
                    imageSrc={character.images.jpg.image_url!}
                  />
                )
              })
            }
          </div>
        )
      }

      {/* <div className='flex flex-wrap items-center justify-center gap-3 md:gap-5' >
        {
          Array.from({ length: paginationLength }, (_, id) => {
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
        }
      </div> */}
    </Container>
  )
}

export default Characters
