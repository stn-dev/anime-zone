import Container from '../components/Container'
import type { CharacterFull } from '@tutkli/jikan-ts'
import { useState } from 'react'
import CardCharacters from '../components/CardCharacters'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'
import { useFetch } from '../hooks/useFetch'

function Characters() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, pageLimit } = useFetch(`top/characters?page=${currentPage}`, currentPage)

  return (
    <Container tag='section' className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {
        isLoading ? (<SkeletonGroup />) : (
          <div className=' w-full grid grid-cols-1 gap-5 items-center justify-center  md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
            {
              (data as CharacterFull[])?.map((character) => {
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
