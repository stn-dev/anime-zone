import { NavLink } from 'react-router'
import Container from './Container'
import { headerLinkData } from '../services/data'

function Header() {
  return (
    <Container tag='header' className='fixed translate-x-[-50%] left-[50%] flex justify-between items-center py-5' >
      <div>LOGO</div>
      <ul className='flex justify-center items-center gap-5' >
        {
          headerLinkData.map((link, id) => (
            <li key={id} >
              <NavLink to={link.href}> {link.label} </NavLink>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Header