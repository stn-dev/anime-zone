import { Link, useLocation } from "react-router"
import { animeHeaderData } from "../services/data"
import { useRef, useState } from "react"
import { useClickOutSide } from "../hooks/useClickOutSide"
import Container from "./Container"
import { useAppearOnScroll } from "../hooks/useAppearOnScroll"

function AnimeHeader() {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState('All')
  const [showNav, setShownav] = useState(false)
  const selectRef = useRef<HTMLDivElement | null>(null)

  useClickOutSide(selectRef, () => setShownav(false))
  const toogle = useAppearOnScroll()

  const checkActiveLink = (link: string) => {
    if (pathname === '/anime' && link === '') {
      return true
    } else if (pathname === `/anime/${link}`) return true
  }

  return (
    <Container tag="header" className={`fixed p-2 lg:w-full flex items-center justify-center left-[50%] translate-x-[-50%] top-[50px] md:top-[65px] xl:top-[90px] z-10 backdrop-blur-lg transition-all duration-300 ${!toogle ? 'opacity-0 translate-y-[-100px]' : 'opacity-100 translate-y-0'} `} >
      <div className=" w-fit flex flex-col items-center gap-3 md:hidden" ref={selectRef} >
        <p className="py-3 px-7 bg-blue text-contrasted font-semibold rounded-md hover:cursor-pointer text-nowrap" onClick={() => setShownav(!showNav)} > Filtered by : <span className="text-neutre pl-3" > {filter} </span> </p>
        {
          showNav && (
            <div className=" w-[60vw] flex flex-col items-center justify-center gap-2 p-3 rounded-md border border-contrasted font-medium" >
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
      <div className="w-full grid-cols-1 md:grid-cols-5 text-xs xl:text-lg gap-2 font-semibold hidden md:grid" >
        {
          animeHeaderData.map((link, id) => (
            <Link
              key={id}
              to={link.href}
              className={`w-full py-4 text-center border border-contrasted `}
              style={{ backgroundColor: checkActiveLink(link.href) ? '#fca311' : '#0a111f', color: checkActiveLink(link.href) ? '#0a111f' : '#e5e5e5' }}
            > {link.label} </Link>
          ))
        }
      </div>
    </Container>
  )
}

export default AnimeHeader