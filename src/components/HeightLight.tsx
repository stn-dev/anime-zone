import { Link } from 'react-router';
import Button from './Button';
import CardAnime from './CardAnime';
import type { Anime, CharacterFull, JikanResponse } from '@tutkli/jikan-ts';
import CardCharacters from './CardCharacters';
import { useEffect, useState } from 'react';
import Skeleton from './Skeleton';

interface HeightLightProps {
  Categories: 'anime' | 'characters'
  limite?: string;
  title: string
}
function HeightLight({ Categories, limite = '3', title }: HeightLightProps) {
  const [data, setData] = useState<Anime[] | CharacterFull[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const request = await fetch(`https://api.jikan.moe/v4/top/${Categories}?limit=${limite}`)
        const response: JikanResponse<Anime[]> = await request.json()
        console.log(response.data)
        setData(response.data.length > 3 ? response.data.slice(1, 4) : response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <div className=' w-full flex flex-col items-center justify-center gap-5 md:gap-8 relative z-[5] ' >
      <h2 className='text-neutre text-4xl md:text-6xl font-semibold opacity-100' > {title} </h2>
      <div className=' w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-5' >
        {
          Categories === 'anime' ?
            (
              (data as Anime[])?.map((item) => {
                return (
                  isLoading ? (<Skeleton key={item.mal_id} />) : (
                    <CardAnime
                      key={item.mal_id}
                      id={item.mal_id}
                      title={item.title}
                      episode={item.episodes}
                      imageSrc={item.images.jpg.large_image_url || item.images.jpg.image_url}
                      genres={item.genres}
                      isFullData={true}
                    />
                  )
                )
              })
            )
            :
            (
              (data as CharacterFull[])?.map((item) => {
                return (
                  isLoading ? (<Skeleton key={item.mal_id} />) : (
                    <CardCharacters
                      key={item.mal_id}
                      id={item.mal_id.toString()}
                      name={item.name}
                      imageSrc={item.images.jpg.large_image_url || item.images.jpg.image_url}
                      japan_name={item.name_kanji}
                    />
                  )
                )
              })
            )
        }
      </div>
      <Link to={Categories === 'anime' ? '/anime/all' : 'characters'} >
        <Button label='See more' variant='stroked' />
      </Link>
    </div>
  )
}

export default HeightLight