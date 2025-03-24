import { Link } from 'react-router';
import { CardProps } from '../services/Type';
import Button from './Button';
import CardAnime from './CardAnime';
import type { Anime, CharacterFull } from '@tutkli/jikan-ts';
import CardCharacters from './CardCharacters';
import { useEffect, useState } from 'react';
import Skeleton from './Skeleton';
interface HeightLightProps {
  Categories: 'anime' | 'characters'
  limite?: string;
  title: string
  // data: (HeightLightProps['dataCategories'] extends 'CharacterFull' ? (Anime[]) : (CharacterFull[]))
}
function HeightLight({ Categories, limite = '3', title }: HeightLightProps) {
  const [data, setData] = useState<Anime[] | CharacterFull[]>()
  const { isLoading, setIsLoading } = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const request = await fetch(`https://api.jikan.moe/v4/top/${Categories}?limit=${limite}`)
        const response = await request.json()
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(`error occuring: ${error}`)
        setIsLoading(false)
      }
    }
    getData()
  })

  return (
    <div className='flex flex-col items-center justify-center gap-5 md:gap-8 relative z-[5] ' >
      <h2 className='text-neutre text-4xl md:text-6xl font-semibold opacity-100' > {title} </h2>
      {
        isLoading ? (<Skeleton />) : (
          <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5' >
            {
              Categories === 'anime' ?
                (
                  data?.map((item: Anime) => {
                    return (
                      <CardAnime
                        key={item.mal_id}
                        id={item.mal_id}
                        title={item.url}
                        episode={item.episodes}
                        imageSrc={item.images.jpg.image_url}
                        genres={item.genres}
                        isFullData={true}
                      />
                    )
                  })
                )
                :
                (
                  data?.map((item: CharacterFull) => {
                    return (
                      <CardCharacters
                        key={item.mal_id}
                        id={item.mal_id.toString()}
                        name={item.name}
                        imageSrc={item.images.jpg.large_image_url as string}
                        japan_name={item.name_kanji}
                      />
                    )
                  })
                )
            }
            {

            }
          </div>
        )
      }
      <Link to={`/${Categories}`} >
        <Button label='See more' variant='stroked' />
      </Link>
    </div>
  )
}

export default HeightLight