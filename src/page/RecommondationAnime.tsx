import type { JikanResponse, Recommendation, RecommendationEntry } from '@tutkli/jikan-ts'
import { useEffect, useState } from 'react'
import CardAnime from '../components/CardAnime'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'

function RecommendationAnime() {
  const [topAnime, setTopAnime] = useState<RecommendationEntry[]>()
  const [loading, setIloading] = useState<boolean>(false)
  const [pageLimit, setPageLimmit] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [slicedPage, setSlicedPage] = (useState(1))
  const itemPerPage = 25
  const lastItem = slicedPage * itemPerPage;
  const firstItem = lastItem - itemPerPage

  const incrementPage = () => {
    if (slicedPage === 8 && currentPage < pageLimit) {
      setCurrentPage((prev) => prev + 1)
      setSlicedPage(1)
    } else { setSlicedPage((prev) => prev + 1) }
    console.log(slicedPage)
  }
  const decrementPage = () => {
    if (slicedPage === 1 && currentPage === 1) return
    if (currentPage > 1 && slicedPage === 1) {
      setCurrentPage((prev) => prev - 1)
      setSlicedPage(8)
    }
    setSlicedPage((prev) => prev - 1)
    console.log(slicedPage)
  }

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setIloading(true)
        const request = await fetch(`https://api.jikan.moe/v4/recommendations/anime?page=${currentPage}`)
        const res: JikanResponse<Recommendation[]> = await request.json()
        const allData: RecommendationEntry[] = []
        res.data.forEach((entries: any) => {
          for (const entri of entries.entry) allData.push(entri)
        })
        setTopAnime([...allData.slice(firstItem, lastItem)])
        setPageLimmit(Number(res.pagination?.last_visible_page))
        setIloading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIloading(false)
      }
    }
    fetchAnime()
  }, [currentPage, slicedPage])
  return (
    <div className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {
        loading ? (
          <SkeletonGroup />
        ) : (
          <div className='grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]' >
            {
              topAnime?.map((anime, id) => {
                return (
                  <CardAnime
                    key={id}
                    id={anime.mal_id}
                    title={anime.title}
                    imageSrc={anime.images.jpg.large_image_url!}
                    isFullData={false}
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
          onClick={decrementPage}
          disable={currentPage === 1 && slicedPage === 1 || loading}
        />
        <Button
          label='Next'
          variant='orange'
          onClick={incrementPage}
          disable={currentPage === pageLimit || loading}
        />
      </div>
    </div >
  )
}

export default RecommendationAnime