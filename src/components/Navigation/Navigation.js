import { NavLink } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='is-active'
            to='/'
            exact
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item nav-item--margin'>
          <NavLink
            className='nav-link'
            activeClassName='is-active'
            to='/movies'
            exact
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
