import { NavLink, useLocation } from "react-router"
import { animeHeaderData } from "../services/data"

function AnimeHeader() {
  const { pathname } = useLocation()
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 text-xs xl:text-lg gap-2 font-semibold" >
      {
        animeHeaderData.map((link, id) => (
          <NavLink
            key={id}
            to={link.href}
            className={`w-full py-4 text-center border border-contrasted `}
            style={{ backgroundColor: pathname === `/anime/${link.href}` ? '#fca311' : 'transparent', color: pathname === `/anime/${link.href}` ? 'black' : 'white' }}
          > {link.label} </NavLink>
        ))
      }
    </div>
  )
}

export default AnimeHeader