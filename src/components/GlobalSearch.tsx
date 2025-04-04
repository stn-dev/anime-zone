import { useEffect, useState } from 'react'
import Input from './Input'
import { AnimeWithType, CharacterWithType } from '../services/Type'
import type { Anime, CharacterFull, JikanResponse } from '@tutkli/jikan-ts'
import useDebounce from '../hooks/useDebounce'
import { Link } from 'react-router'

function GlobalSearch() {
  const [searchTerm, setSearchTrem] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRes, setTotalRes] = useState<Array<AnimeWithType | CharacterWithType>>([])
  const debounceSearchTrem = useDebounce(searchTerm, 500)
  const URL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const getCorespondingData = async () => {

      if (!searchTerm) {
        setTotalRes([])
        return
      }

      const animeRequest = await fetch(`${URL}anime?q=${debounceSearchTrem}&page=${currentPage}`)
      const animeresponse: JikanResponse<Anime[]> = await animeRequest.json()
      const animeData = animeresponse.data.map((anime) => {
        return { ...anime, filterType: 'anime' } as AnimeWithType
      })

      const characterRequest = await fetch(`${URL}characters?q=${debounceSearchTrem}&page=${currentPage}`)
      const characterResponse: JikanResponse<CharacterFull[]> = await characterRequest.json()
      const characterData = (characterResponse.data).map((character) => {
        return { ...character, filterType: 'character' } as CharacterWithType
      })
      setTotalRes([...animeData, ...characterData])
    }
    getCorespondingData()
  }, [debounceSearchTrem, currentPage, URL, searchTerm])

  return (
    <div className=' w-[250px] md:w-[350px] xl:w-[400px] relative z-[10] flex flex-col gap-2' >
      <Input
        placeholder='search characters or animé...'
        className=''
        type='text'
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTrem(e.target.value)
          setCurrentPage(1)
        }}
      />
      {
        totalRes.length ? (
          <ul className='hide-scroll-bar w-full max-h-[300px] fkex flex-col items-center justify-center p-2 bg-dark overflow-hidden overflow-y-visible rounded-lg border border-contrasted relative' >
            {
              totalRes.sort().map((item) => (
                <li key={item.mal_id} className=' w-full h-fit ' >
                  <Link
                    to={item.filterType === 'anime' ? `/anime/${item.mal_id}` : `/characters/${item.mal_id}`}
                    className='group w-full h-fit mt-3 border-b border-gray-500 flex items-center justify-between gap-5 text-neutre py-3'
                  >
                    <span className='text-lg font-bold truncate group-hover:text-contrasted transition-colors'>
                      {item.filterType === 'anime' ? item.title : item.name}
                    </span>
                    <span className='text-sm font-normal opacity-60 ' > {item.filterType} </span>
                  </Link>
                </li>
              ))
            }
            {
              totalRes.length >= 50 ? (
                <li className='sticky bottom-0 left-0 w-full h-fit text-dark text-lg rounde-lg font-bold ' >
                  <button
                    onClick={() => currentPage <= 1 ? setCurrentPage(1) : setCurrentPage((prev) => --prev)}
                    disabled={currentPage <= 1}
                    className={`w-[50%] h-fit py-3 text-center  bg-contrasted hover:cursor-pointer hover:text-neutre transition-colors ${currentPage <= 1 ? 'brightness-50' : 'brightness-100'}`}
                  > {'<< Prev'} </button>
                  <button
                    onClick={() => currentPage < 50 ? setCurrentPage((prev) => ++prev) : setCurrentPage(currentPage)}
                    className={`w-[50%] h-fit py-3 text-center  bg-contrasted border-l border-dark hover:cursor-pointer hover:text-neutre transition-colors ${currentPage > 50 ? 'brightness-50' : 'brightness-100'}`}
                  > {'Next >>'} </button>
                </li>
              ) : null
            }
          </ul>
        ) : null
      }
    </div>
  )
}

export default GlobalSearch