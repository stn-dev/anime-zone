import { useParams } from 'react-router'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import { JikanClient } from '@tutkli/jikan-ts'
import type { Anime } from '@tutkli/jikan-ts'

function SingleCharacter() {
  const [anime, setAnime] = useState<Anime>()
  const jikan = new JikanClient()
  const params = useParams()
  const id = params.id
  useEffect(() => {
    const getOneAnime = async () => {
      // const res = await jikan.anime.getAnimeById(Number(id))
      // console.log(res.data)
      // setAnime(res.data)
    }
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
      <img className='w-full h-full absolute opacity-20 top-0 left-0 z-[5] object-cover' src={"/src/assets/home-image.png"} alt="" />
      <Container tag='section' className='pt-[100px] bg-transparent min-h-screen flex flex-col gap-10 items-center relative z-[6] pb-[50px] '>
        <div className='w-full max-w-[1000px] flex flex-col gap-5 lg:flex-row items-center justify-between'>

          <div className='flex flex-col items-start justify-center gap-5'>
            <div className='text-xl font-semibold flex items-center justify-center gap-5'>
              <div className='w-fit h-[30px] lg:h-[50px] overflow-hidden flex items-center justify-center' >
                <img
                  className=' w-[50px] lg:w-[80px]'
                  src="/src/assets/imdb.png"
                  alt="dmdb logo"
                />
              </div>
              <span> 9.2 </span>
            </div>
            <h1 className=' w-fit text-[40px] font-bold uppercase flex pl-5 items-center justify-center gap-5 overflow-hidden relative' >
              <span className=' h-full w-[5px] bg-contrasted absolute top-0 left-0' ></span>
              pokemon
            </h1>

            <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Genres:
              <span className='text-neutre font-normal' >
                comedie , adventure
              </span>
            </p>
            <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Episodes:
              <span className='text-neutre font-normal' >
                20
              </span>
            </p>
            <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Studios:
              <span className='text-neutre font-normal' >
                anime studio
              </span>
            </p>
            <p className='text-contrasted font-semibold flex items-center justify-center gap-5 text-xl'> Years:
              <span className='text-neutre font-normal' >
                1990
              </span>
            </p>
          </div>

          <img
            className='w-full max-w-[500px]  h-auto rounded-tl-3xl rounded-br-3xl'
            src={"/src/assets/home-image.png"}
            alt="anime Image"
          />
        </div>
        {/* trailer part */}
        <div className='flex flex-col items-center justify-center gap-10' >
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
        </div>

        {/* synopsis part */}
        <div className='w-full h-fit flex flex-col items-center justify-center gap-10 max-w-[1000px]' >
          <h2 className='text-5xl font-bold capitalize' > Synopsis </h2>
          <p className=' text-base lg:text-xl opacity-70' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magni dolorem labore ipsam sequi corrupti incidunt, tempore ducimus eius adipisci minima ad libero ab dolores possimus sit, optio necessitatibus omnis voluptates officiis! Repudiandae officia dolor labore eaque earum laudantium laborum praesentium eius temporibus itaque nihil, a voluptas, quaerat neque omnis nulla nesciunt assumenda rem delectus illum magni eveniet ipsa eligendi? Dolore, molestiae! Nisi animi, maxime nostrum labore, soluta velit magnam necessitatibus repudiandae in iusto beatae officia est? Molestiae velit possimus nesciunt rem animi amet eveniet repellendus mollitia libero sed deleniti dolorum, reprehenderit obcaecati, magni molestias, similique vel neque tenetur fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum quia iusto alias neque accusamus, necessitatibus voluptatibus dicta obcaecati, nulla est dolore molestiae temporibus similique? Ratione nostrum ducimus quasi odio laboriosam ut alias consequuntur delectus exercitationem molestias ea accusantium unde assumenda quo, quae rerum qui distinctio enim culpa vitae voluptatem rem vel doloribus. Laborum, culpa a aspernatur, modi vero accusantium doloremque earum error maxime assumenda, dignissimos eaque dolorum impedit temporibus corporis ex quos cupiditate. Officia culpa voluptas tempore odit magni aspernatur. Culpa vero nam fugiat laboriosam ea magnam nulla optio suscipit commodi ex, itaque voluptatem magni doloribus, ipsum, facilis animi? </p>
        </div>
      </Container>

    </div>
  )
}

export default SingleCharacter