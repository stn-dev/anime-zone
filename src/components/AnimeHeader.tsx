import { Link, NavLink, useLocation } from "react-router"
import { animeHeaderData } from "../services/data"
import { useState } from "react"

function AnimeHeader() {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState('All')
  const [showNav, setShownav] = useState(false)
  console.log(pathname)
  return (
    <>
      <div className="flex flex-col items-center gap-3 md:hidden" >
        <p className="py-3 px-7 bg-blue text-contrasted font-semibold rounded-md hover:cursor-pointer text-nowrap" onClick={() => setShownav(!showNav)} > Filtered by : <span className="text-neutre pl-3" > {filter} </span> </p>
        {
          showNav && (
            <div className=" w-[60%] flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-contrasted font-medium" >
              {
                animeHeaderData.map((link, id) => (
                  <Link
                    to={link.href}
                    key={id}
                    onClick={() => {
                      setFilter(link.label)
                      setShownav(false)
                    }}
                    className="w-full text-center bg-blue py-2"
                  > {link.label} </Link>
                ))
              }
            </div>
          )
        }
      </div>
      <div className="grid-cols-1 md:grid-cols-5 text-xs xl:text-lg gap-2 font-semibold hidden md:grid" >
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
    </>
  )
}

export default AnimeHeader