import type { Anime } from '@tutkli/jikan-ts'
import { useState } from 'react'
import CardAnime from '../components/CardAnime'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'
import { useFetch } from '../hooks/useFetch'

function AnimeUpcuming() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, pageLimit } = useFetch(`seasons/now?page=${currentPage}`, currentPage)

  return (
    <div className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {
        isLoading ? (
          <SkeletonGroup />
        ) : (
          <div className='grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
            {
              (data as Anime[])?.map((anime, id) => {
                return (
                  <CardAnime
                    key={id}
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
          onClick={() => currentPage < pageLimit ? setCurrentPage((prev) => ++prev) : setCurrentPage(pageLimit)}
          disable={currentPage === pageLimit || isLoading}
        />
      </div>
    </div >
  )
}

export default AnimeUpcuming