import { Link } from "react-router"
import { CardProps } from "../services/Tyoe"

function CardAnime(props: CardProps) {
  const { id, title, rating, date, imageSrc } = props
  return (
    <Link to={`/anime/${id}`} className=" w-full shadow-xl ">
      <img
        className="w-full h-auto"
        src={imageSrc}
        alt="anime card image"
      />
      <div className="p-3 text-xl" >
        <h2 className=" font-semibold" > {title} </h2>
        <p className="flex justify-between items-center" >
          <span> ⭐ {rating} </span>
          <span className="text-base text-primary"> {date} </span>
        </p>
      </div>
    </Link>
  )
}

export default CardAnime
