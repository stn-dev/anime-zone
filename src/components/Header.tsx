import { NavLink } from 'react-router'
import Container from './Container'
import { headerLinkData } from '../services/data'
import { useState } from 'react'
import Logo from './icons/Logo'

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (

    <div className='w-full h-fit fixed flex items-center justify-center z-50 backdrop-blur-sm' >
      <div className='absolute w-full h-full bg-dark opacity-30' ></div>
      <Container tag='header' className='  text-white  flex justify-between items-center text-sm lg:text-base xl:text-lg py-0 md:py-3 xl:py-5 z-10 ' >
        <NavLink end={false} className={"z-10 relative"} to={'/'} ><Logo /></NavLink>
        <p onClick={() => setShowMenu(!showMenu)}
          className='lg:hidden hover:cursor-pointer z-10 relative'
        >
          {showMenu ? "CLOSE" : "MENU"}
        </p>
        <ul className={`flex flex-col justify-center bg-dark lg:bg-transparent  duration-500 items-center gap-5 absolute top-0 left-0 w-full h-screen text-6xl md:text-8xl lg:font-sans font-jaro lg:static lg:flex-row lg:text-base lg:gap-5 lg:h-fit lg:w-fit  ${!showMenu && 'left-[100%]'}`} >
          {
            headerLinkData.map((link, id) => (
              <li className='transition-none' key={id} onClick={() => setShowMenu(false)} >
                <NavLink to={link.href} className='hover:text-contrasted  transition-colors'> {link.label} </NavLink>
              </li>
            ))
          }
        </ul>
      </Container>
    </div>

  )
}

export default Header