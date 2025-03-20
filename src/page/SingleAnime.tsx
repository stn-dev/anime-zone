import { useParams } from 'react-router'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import { JikanClient } from '@tutkli/jikan-ts'
import type { Anime } from '@tutkli/jikan-ts'

function SingleAnime() {
  const [anime, setAnime] = useState<Anime>()
  const jikan = new JikanClient()
  const params = useParams()
  const id = params.id
  useEffect(() => {
    const getOneAnime = async () => {
      const res = await jikan.anime.getAnimeById(Number(id))
      console.log(res.data)
      setAnime(res.data)
    }
    getOneAnime()
  }, [])

  return (
    <Container tag='section' className='pt-[100px] bg-primary'>
      {anime?.title}
    </Container>
  )
}

export default SingleAnime