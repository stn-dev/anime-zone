import { useParams } from 'react-router'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import { JikanClient } from '@tutkli/jikan-ts'
import type { Anime, Character, CharacterFull } from '@tutkli/jikan-ts'
import { useFetch } from '../hooks/useFetch'
import CardAnime from '../components/CardAnime'

function SingleCharacter() {
  const [character, setCharacter] = useState<CharacterFull>()
  const jikan = new JikanClient()
  const params = useParams()
  const id = params.id
  useEffect(() => {
    const getOneAnime = async () => {
      const res = await jikan.characters.getCharacterFullById(Number(id))
      console.log(res.data)
      setCharacter(res.data)

    }
    // console.log(data)
    getOneAnime()
  }, [])

  return (
    // <div className='w-full h-full relative' >
    //   <img className='w-full h-full absolute opacity-20 top-0 left-0 z-[5] object-cover' src={anime?.images.jpg.large_image_url} alt="" />
    //   <Container tag='section' className='pt-[100px] bg-transparent min-h-screen flex flex-col gap-10 items-center relative z-[6] pb-[50px]'>
    //     <div className='w-full max-w-[1000px] flex flex-col gap-5 lg:flex-row items-center justify-between'>

    //       <div className='flex flex-col items-start justify-center gap-5'>
    //         <div className='text-xl font-semibold flex items-center justify-center gap-5'>
    //           <img
    //             className=' w-[50px] lg:w-[80px] h-fit'
    //             src="/src/assets/imdb.png"
    //             alt="dmdb logo"
    //           />
    //           <span> {anime?.score} </span>
    //         </div>
    //         <h1 className=' w-fit text-[40px] font-bold uppercase flex pl-5 items-center justify-center gap-5 overflow-hidden relative' >
    //           <span className=' h-full w-[5px] bg-contrasted absolute top-0 left-0' ></span>
    //           {anime?.title}
    //         </h1>

    //         <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Genres:
    //           <span className='text-neutre font-normal' >
    //             {anime?.genres.map((genre, id) => (<span key={id}> {genre.name} , </span>))}
    //           </span>
    //         </p>
    //         <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Episodes:
    //           <span className='text-neutre font-normal' >
    //             {anime?.episodes},
    //           </span>
    //         </p>
    //         <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Studios:
    //           <span className='text-neutre font-normal' >
    //             {anime?.studios.map((studio, id) => (<span key={id}> {studio.name} , </span>))}
    //           </span>
    //         </p>
    //         <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Years:
    //           <span className='text-neutre font-normal' >
    //             {!anime?.year ? 'Not estimed' : anime.year}
    //           </span>
    //         </p>
    //       </div>

    //       <img
    //         className='w-full max-w-[500px]  h-auto rounded-tl-3xl rounded-br-3xl'
    //         src={anime?.images.jpg.large_image_url}
    //         alt="anime Image"
    //       />
    //     </div>
    //   </Container>

    // </div>
    <div className='w-full h-full relative' >
      <img className='w-full h-full absolute opacity-20 top-0 left-0 z-[5] object-cover' src={character?.images.jpg.image_url} alt="" />
      <Container tag='section' className='pt-[100px] bg-transparent min-h-screen flex flex-col gap-10 items-center relative z-[6] pb-[50px] '>
        <div className='w-full max-w-[1000px] flex flex-col gap-5 lg:flex-row items-center justify-between'>

          <div className='flex flex-col items-start justify-center gap-5'>
            {/* <div className='text-xl font-semibold flex items-center justify-center gap-5'>
              <div className='w-fit h-[30px] lg:h-[50px] overflow-hidden flex items-center justify-center' >
                <img
                  className=' w-[50px] lg:w-[80px]'
                  src="/src/assets/imdb.png"
                  alt="dmdb logo"
                />
              </div>
              <span> 9.2 </span>
            </div> */}
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
            {/* <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Studios:
              <span className='text-neutre font-normal' >
                anime studio
              </span>
            </p>
            <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Years:
              <span className='text-neutre font-normal' >
                1990
              </span>
            </p> */}
          </div>

          <img
            className='w-full max-w-[500px]  h-auto rounded-tl-3xl rounded-br-3xl'
            src={character?.images.jpg.image_url}
            alt="anime Image"
          />
        </div>
        {/* trailer part */}
        {/* <div className='flex flex-col items-center justify-center gap-10' >
          <h2 className='text-5xl font-bold capitalize' > trailer </h2>
          <div className='group w-[300px] h-fit relative overflow-hidden border border-neutre  rounded-2xl hover:cursor-pointer'>
            <video
              className="w-full h-auto scale-125 group-hover:scale-100 duration-500 group-hover:brightness-40"
              autoPlay
              muted
              loop
              src="/src/assets/test-video.mp4"
            />
            <img
              className='w-[30%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-500'
              src="/src/assets/imdb.png"
              alt=""
            />
          </div>
        </div> */}

        {/* synopsis part */}
        <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]' >
          <h2 className='text-5xl font-bold capitalize' > About </h2>
          <p className=' text-base lg:text-xl opacity-70' > {character?.about} </p>
        </div>
        <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]'  >
          <h2 className='text-5xl font-bold capitalize' > Some anime </h2>
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

export default SingleCharacter