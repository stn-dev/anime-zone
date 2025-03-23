import { Link } from 'react-router';
import { CardProps } from '../services/Type';
import Button from './Button';
import Card from './Card';
interface HeightLightProps {
  title: string;
  data: number;
  link: CardProps['link']
}
function HeightLight({ title, data, link }: HeightLightProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 md:gap-8 relative z-[5] ' >
      <h2 className='text-neutre text-4xl md:text-6xl font-semibold opacity-100' > {title} </h2>
      <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5' >
        {
          Array.from({ length: data }, (_, id) => {
            return (
              <Card
                key={id}
                id={id}
                title='Pokemon'
                link={link}
                episode={20}
                imageSrc='/src/assets/home-image.png'
                genres={[{ name: "adventrure" }]}
              />
            )
          })
        }
      </div>
      <Link to={`/${link}`} >
        <Button label='See more' variant='stroked' />
      </Link>
    </div>
  )
}

export default HeightLight