import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

import Logo from '../assets/logo.jpg'
import '../styles/Header.css'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='image-wrapper'>
          <NavLink to='/'>
            {<img className='logo-img' src={Logo} alt='Little Lemon logo' />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </header>
  )
}

export default Navbar
