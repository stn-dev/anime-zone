import { useParams } from 'react-router'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import { JikanClient } from '@tutkli/jikan-ts'
import type { Anime } from '@tutkli/jikan-ts'
import VideoPriview from '../components/VideoPriview'
import GoBack from '../components/icons/GoBack'
import { RingLoader } from 'react-spinners';

function SingleAnime() {
  const [anime, setAnime] = useState<Anime>()
  const [isLoading, setIsLoading] = useState(false)
  const jikan = new JikanClient()
  const { id } = useParams()
  useEffect(() => {
    const getOneAnime = async () => {
      try {
        setIsLoading(true)
        const res = await jikan.anime.getAnimeById(Number(id))
        setAnime(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log('error : ' + error)
        setIsLoading(false)
      }
    }
    getOneAnime()
  }, [])

  return (
    <>
      {
        isLoading ? (<Container className='h-screen flex items-center justify-center' > <RingLoader color="#fca311" /> </Container>) : (

          <div className='w-full h-full relative' >

            <img className='w-full h-full absolute opacity-20 top-0 left-0 z-[5] object-cover' src={anime?.images.jpg.large_image_url} alt="" />

            <Container tag='section' className='pt-[100px] bg-transparent min-h-screen flex flex-col gap-10 items-center relative z-[6] pb-[50px] '>

              <GoBack className='absolute left-[20px] top-[50px] lg:left-[100px] md:top-[100px] z-20 w-4 h-4  md:w-5 md:h-5' />

              <div className='w-full max-w-[1000px] flex flex-col gap-5 lg:flex-row items-center justify-between'>

                <div className='flex flex-col items-start justify-center gap-5'>
                  <div className='text-xl font-semibold flex items-center justify-center gap-5'>
                    <div className='w-fit h-[30px] lg:h-[50px] overflow-hidden flex items-center justify-center' >
                      <img
                        className=' w-[50px] lg:w-[80px]'
                        src="/public/imdb.png"
                        alt="dmdb logo"
                      />
                    </div>
                    <span> {anime?.score}</span>
                  </div>

                  <h1 className=' w-fit text-[40px] font-bold uppercase flex pl-5 items-center justify-center gap-5 overflow-hidden relative' >
                    <span className=' h-full w-[5px] bg-contrasted absolute top-0 left-0' ></span>
                    {anime?.title}
                  </h1>

                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Genres:
                    <span className='text-neutre font-normal flex flex-nowrap items-center justify-start gap-3 truncate' >
                      {
                        anime?.genres.map((genre, id) => (
                          <span className='truncate' key={id} > {genre.name} ,</span>
                        ))
                      }
                    </span>
                  </p>

                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Episodes:
                    <span className='text-neutre font-normal' >
                      {anime?.episodes} ,
                    </span>
                  </p>

                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Studios:
                    <span className='text-neutre font-normal flex items-center justify-center gap-3' >
                      {anime?.studios.map((studiio, id) => (
                        <span key={id} > {studiio.name} ,</span>
                      ))}
                    </span>
                  </p>

                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Years:
                    <span className='text-neutre font-normal' >
                      {anime?.year ? anime.year : "Not avalaible"}
                    </span>
                  </p>

                </div>

                <img
                  className='w-full max-w-[500px]  h-auto rounded-tl-3xl rounded-br-3xl'
                  src={anime?.images.jpg.large_image_url}
                  alt="anime Image"
                />
              </div>

              {/* trailer part */}
              {
                anime?.trailer.embed_url && (
                  <div className='flex flex-col items-center justify-center gap-10' >
                    <h2 className='text-5xl font-bold capitalize' > trailer </h2>
                    <VideoPriview
                      src={anime?.trailer.embed_url}
                      title={anime?.title}
                      key={anime?.mal_id}
                    />
                  </div>
                )
              }

              {/* synopsis part */}
              <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]' >
                <h2 className='text-5xl font-bold capitalize' > Synopsis </h2>
                <p className=' text-base lg:text-xl opacity-70' > {anime?.synopsis} </p>
              </div>
            </Container>
          </div>
        )
      }
    </>
  )
}

export default SingleAnime