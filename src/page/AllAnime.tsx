import type { Anime, JikanResponse } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import CardAnime from '../components/CardAnime'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'

function AllAnime() {
  const [topAnime, setTopAnime] = useState<Anime[]>()
  const [loading, setIloading] = useState<boolean>(false)
  const [pageLimit, setPageLimmit] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setIloading(true)
        const request = await fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
        const res: JikanResponse<Anime[]> = await request.json()
        setTopAnime(res.data)
        setPageLimmit(Number(res.pagination?.last_visible_page))
        setIloading(false)
        console.log(res)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIloading(false)
      }
    }
    fetchAnime()
  }, [currentPage])
  return (
    <div className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
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
      <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10' >
        <Button
          label='Prev'
          variant='orange'
          onClick={() => currentPage >= 1 ? setCurrentPage((prev) => prev - 1) : setCurrentPage(1)}
          disable={currentPage === 1 || loading}
        />
        <Button
          label='Next'
          variant='orange'
          onClick={() => currentPage <= pageLimit ? setCurrentPage((prev) => ++prev) : setCurrentPage(pageLimit)}
          disable={currentPage === pageLimit || loading}
        />
      </div>
    </div >
  )
}

export default AllAnime