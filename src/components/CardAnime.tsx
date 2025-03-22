import { Link } from "react-router"
import { CardProps } from "../services/Tyoe"

function CardAnime(props: CardProps) {
  const { id, title, episode, imageSrc, genres = [] } = props
  const limitedGenres = genres.slice(0, 3)
  return (
    <Link to={`/anime/${id}`} className="group w-full shadow-neutral-50 relative delay-0 duration-0 overflow-hidden border border-neutre rounded-tl-3xl rounded-br-3xl max-h-[620px]">
      <img
        className="w-full h-auto group-hover:scale-110 duration-500"
        src={imageSrc}
        alt="anime card image"
      />
      <div className="w-full flex flex-col items-start justify-center gap-5 p-5 text-xl absolute bottom-0 left-0 bg-dark " >
        <h2 className=" font-semibold text-neutre" > {title} </h2>
        <div className=" w-full flex items-center justify-items-start text-sm md:text-base xl:text-lg gap-5" >
          <p className="flex justify-between items-center" >
            {episode} Ép
          </p>
          <p> | </p>
          <p className="flex justify-between items-center" >
            <span className="flex flex-nowrap text-nowrap text-contrasted">
              {
                limitedGenres.map((genre, id) => (
                  <span key={id}>{genre.name} ,</span>
                ))
              }
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CardAnime
