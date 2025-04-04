import type { JikanResponse, Recommendation, RecommendationEntry } from '@tutkli/jikan-ts'
import { useEffect, useState, useCallback, useMemo } from 'react'
import CardAnime from '../components/CardAnime'
import SkeletonGroup from '../components/SkeletonGroup'
import Button from '../components/Button'

function RecommendationAnime() {
  const [topAnime, setTopAnime] = useState<RecommendationEntry[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pageLimit, setPageLimit] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [slicedPage, setSlicedPage] = useState<number>(1)

  const URL = import.meta.env.VITE_BASE_URL
  const itemPerPage = 25
  const lastItem = slicedPage * itemPerPage
  const firstItem = lastItem - itemPerPage

  const incrementPage = () => {
    setSlicedPage((prev) => (prev === 8 ? 1 : prev + 1))
    if (slicedPage === 8 && currentPage < pageLimit) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const decrementPage = () => {
    if (currentPage === 1 && slicedPage === 1) return
    setSlicedPage((prev) => (prev === 1 ? 8 : prev - 1))
    if (currentPage > 1 && slicedPage === 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const fetchAnime = useCallback(async () => {
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal

    try {
      const response = await fetch(`${URL}recommendations/anime?page=${currentPage}`, { signal })
      const res: JikanResponse<Recommendation[]> = await response.json()
      const allData: RecommendationEntry[] = res.data.flatMap((entry) => entry.entry)

      setTopAnime(allData)
      setPageLimit(Number(res.pagination?.last_visible_page) || 1)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      console.error(`Error fetching anime: ${error}`)
    } finally {
      setLoading(false)
    }

    return () => controller.abort()
  }, [URL, currentPage])

  useEffect(() => {
    fetchAnime()
  }, [fetchAnime])

  const paginatedAnime = useMemo(() => topAnime.slice(firstItem, lastItem), [topAnime, firstItem, lastItem])

  return (
    <div className='min-h-screen pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-10'>
      {loading ? (
        <SkeletonGroup />
      ) : (
        <div className='grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 xl:grid-cols-3 min-h-[90vh]'>
          {paginatedAnime.map((anime, id) => (
            <CardAnime
              key={id}
              id={anime.mal_id}
              title={anime.title}
              imageSrc={anime.images.jpg.large_image_url as string}
              isFullData={false}
            />
          ))}
        </div>
      )}
      <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10'>
        <Button label='Prev' variant='orange' onClick={decrementPage} disable={currentPage === 1 && slicedPage === 1 || loading} />
        <Button label='Next' variant='orange' onClick={incrementPage} disable={currentPage === pageLimit || loading} />
      </div>
    </div>
  )
}

export default RecommendationAnime
