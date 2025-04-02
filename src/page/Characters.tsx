import Container from '../components/Container'
import type { Character, CharacterFull, JikanResponse } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import CardCharacters from '../components/CardCharacters'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'

function Characters() {
  const [characters, setCharacters] = useState<Character[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [pageLimit, setPageLimmit] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const URL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const gatCharacters = async () => {
      setIsLoading(true)
      try {
        const request = await fetch(`${URL}top/characters?page=${currentPage}`)
        const response: JikanResponse<CharacterFull[]> = await request.json()
        console.log(response.data)
        setCharacters(response.data)
        setPageLimmit(Number(response.pagination?.last_visible_page))
        setIsLoading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIsLoading(false)
      }
    }
    gatCharacters()
  }, [currentPage])
  return (
    <Container tag='section' className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
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
      <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10' >
        <Button
          label='Prev'
          variant='orange'
          onClick={() => currentPage >= 1 ? setCurrentPage((prev) => prev - 1) : setCurrentPage(1)}
          disable={currentPage === 1 || isLoading}
        />
        <Button
          label='Next'
          variant='orange'
          onClick={() => currentPage < pageLimit ? setCurrentPage((prev) => prev + 1) : setCurrentPage(pageLimit)}
          disable={currentPage === pageLimit || isLoading}
        />
      </div>
    </Container>
  )
}

export default Characters
