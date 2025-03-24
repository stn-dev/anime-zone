import { Link } from "react-router"
import { CardCharactersProps } from "../services/Type"

function CardCharacters(props: CardCharactersProps) {
  const { id, imageSrc, japan_name, name } = props
  return (
    <Link to={`/characters/${id}`} className="group w-full shadow-neutral-50 relative delay-0 duration-0 overflow-hidden border border-neutre rounded-tl-3xl rounded-br-3xl max-h-[550px]">
      <img
        className="w-full h-auto group-hover:scale-110 duration-500"
        src={imageSrc}
        alt="anime card image"
      />
      <div className="w-full flex flex-col items-start justify-center gap-5 p-5 text-xl absolute bottom-0 left-0 bg-dark " >
        <h2 className=" font-semibold text-neutre" > {name} </h2>
        <div className=" w-full flex items-center justify-items-start text-sm md:text-base xl:text-lg gap-5" >
          <p className="flex justify-between items-center text-contrasted" >
            {japan_name}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CardCharacters