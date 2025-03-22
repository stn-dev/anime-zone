import Button from './Button';
import CardAnime from './CardAnime'
interface HeightLightProps {
  title: string;
  data: number;
}
function HeightLight({ title, data }: HeightLightProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 md:gap-8 relative z-[5] ' >
      <h2 className='text-neutre text-4xl md:text-6xl font-semibold opacity-100' > {title} </h2>
      <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5' >
        {
          Array.from({ length: data }, (_, id) => {
            return (
              <CardAnime
                key={id}
                id={id}
                title='Pokemon'
                episode={20}
                imageSrc='/src/assets/home-image.png'
                genres={[{ name: "adventrure" }]}
              />
            )
          })
        }
      </div>
      <Button label='See more' variant='stroked' />
    </div>
  )
}

export default HeightLight