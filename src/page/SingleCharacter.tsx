import { useParams } from 'react-router'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import { JikanClient } from '@tutkli/jikan-ts'
import type { CharacterFull } from '@tutkli/jikan-ts'
import CardAnime from '../components/CardAnime'
import GoBack from '../components/icons/GoBack'
import { RingLoader } from 'react-spinners';

function SingleCharacter() {
  const [character, setCharacter] = useState<CharacterFull>()
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()
  useEffect(() => {
    const jikan = new JikanClient()
    const getOneAnime = async () => {
      try {
        setIsLoading(true)
        const res = await jikan.characters.getCharacterFullById(Number(id))
        setCharacter(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log(`error is : ${error}`)
        setIsLoading(false)
      }
    }
    getOneAnime()
  }, [id])

  return (
    <>
      {
        isLoading ? (<Container className='h-screen flex items-center justify-center' > <RingLoader color="#fca311" /> </Container>) : (
          <div className='w-full h-full relative' >

            <img className='w-full h-full absolute opacity-20 top-0 left-0 z-[5] object-cover' src={character?.images.jpg.image_url} alt="" />
            <Container tag='section' className='pt-[100px] bg-transparent min-h-screen flex flex-col gap-10 items-center relative z-[6] pb-[50px]'>

              <GoBack className='absolute left-[20px] top-[50px] lg:left-[100px] md:top-[100px] z-20 w-4 h-4  md:w-5 md:h-5' />

              <div className='w-full max-w-[1000px] flex flex-col gap-5 lg:flex-row items-center justify-between'>

                <div className='flex flex-col items-start justify-center gap-5'>

                  <h1 className=' w-fit text-[40px] font-bold uppercase flex pl-5 items-center justify-center gap-5 overflow-hidden relative' >
                    <span className=' h-full w-[5px] bg-contrasted absolute top-0 left-0' ></span>
                    {character?.name}
                  </h1>

                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Nick-name:
                    <span className='text-neutre font-normal' >
                      {
                        character?.nicknames.length ? (
                          character?.nicknames.slice(1, 4).map((name) => (
                            <span key={name}> {name} ,</span>
                          ))
                        ) : 'No nick-name'
                      }
                    </span>
                  </p>
                  <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Name kanji:
                    <span className='text-neutre font-normal' >
                      {character?.name_kanji}
                    </span>
                  </p>

                </div>

                <img
                  className='w-full max-w-[500px]  h-auto rounded-tl-3xl rounded-br-3xl'
                  src={character?.images.jpg.image_url}
                  alt="anime Image"
                />
              </div>

              {/* about part */}
              <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]' >
                <h2 className='text-5xl font-bold capitalize' > About </h2>
                <p className=' text-base lg:text-xl opacity-70' > {character?.about} </p>
              </div>
              <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]'  >
                <h2 className='text-5xl font-bold capitalize' > Related anime </h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5' >
                  {
                    character?.anime.slice(1, 7).map(({ anime }) => (
                      <CardAnime
                        id={anime.mal_id}
                        key={anime.mal_id}
                        title={anime.title}
                        imageSrc={anime.images.jpg.large_image_url as string}
                        isFullData={false}
                      />
                    ))
                  }
                </div>
              </div>
            </Container>
          </div>
        )
      }
    </>
  )
}

export default SingleCharacter