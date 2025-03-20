import { Link } from "react-router"
import { CardProps } from "../services/Tyoe"

function CardAnime(props: CardProps) {
  const { id, title, rating, date, imageSrc, genres = [] } = props
  return (
    <Link to={`/anime/${id}`} className="group w-full shadow-neutral-50 relative delay-0 duration-0 overflow-hidden border border-neutre rounded-tl-3xl rounded-br-3xl">
      <img
        className="w-full h-auto"
        src={imageSrc}
        alt="anime card image"
      />
      <div className="w-full flex flex-col items-center justify-center gap-3 p-5 text-xl absolute bottom-0 left-0 bg-dark " >
        <h2 className=" font-semibold text-center text-contrasted" > {title} </h2>
        <p className="flex justify-between items-center w-full" >
          <span>Ranking: </span>
          <span className="text-lg font-semibold">⭐ {rating}  </span>
        </p>
        <p className="flex justify-between items-center w-full" >
          <span> Genres:</span>
          <span className="text-lg font-semibold">
            {
              genres.map((genre, id) => (
                <span key={id}>  {genre.name}, </span>
              ))
            }
          </span>
        </p>
        <p className="flex justify-between items-center w-full" >
          <span> Years:</span>
          <span className="text-lg font-semibold"> {date} </span>
        </p>
      </div>
    </Link>
  )
}

export default CardAnime
