import { NavLink } from 'react-router'
import Container from './Container'
import { headerLinkData } from '../services/data'
import { useState } from 'react'

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <Container tag='header' className=' bg-white fixed translate-x-[-50%] left-[50%] shadow-lg flex justify-between items-center text-sm lg:text-base xl:text-lg py-3 lg:py-5 z-10' >
      <NavLink to={'/'} >LOGO</NavLink>
      <p onClick={() => setShowMenu(!showMenu)}
        className='lg:hidden hover:cursor-pointer'
      >
        {showMenu ? "CLOSE" : "MENU"}
      </p>
      <ul className={`flex flex-col justify-center transition-transform duration-500 items-center gap-5 fixed top-[100%] left-0 w-full h-screen bg-white text-2xl lg:static lg:flex-row lg:text-base lg:gap-5 lg:h-fit lg:w-fit  ${!showMenu && 'translate-x-[100%]'} lg:translate-x-0`} >
        {
          headerLinkData.map((link, id) => (
            <li key={id} onClick={() => setShowMenu(false)} >
              <NavLink to={link.href} className={'hover:text-blue-800'} > {link.label} </NavLink>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Header