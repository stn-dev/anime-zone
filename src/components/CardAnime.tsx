import { Link } from "react-router"
import { CardProps } from "../services/Tyoe"

function CardAnime(props: CardProps) {
  const { id, title, rating, date, imageSrc } = props
  return (
    <Link to={`/anime/${id}`} className="group w-full shadow-neutral-50 relative delay-0 duration-0 overflow-hidden">
      <img
        className="w-full h-auto"
        src={imageSrc}
        alt="anime card image"
      />
      <div className="p-3 text-xl " >
        <h2 className=" font-semibold" > {title} </h2>
        <p className="flex justify-between items-center " >
          <span> {rating} ⭐</span>
          <span className="text-base "> {date} </span>
        </p>
      </div>
      {/* <div className="w-full h-full absolute top-0 left-0 bg-blue-900 text-white p-5 translate-x-full duration-500 group-hover:translate-x-0 delay-1000 text-lg">
        {synopsis}
      </div> */}
    </Link>
  )
}

export default CardAnime
