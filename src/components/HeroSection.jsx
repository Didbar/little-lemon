import React from 'react'
import { NavLink } from 'react-router-dom'

import HeroImage from './assets/gourmet.jpg'
import './styles/HeroSection.css'

const HeroSection = () => {
  return (
    <section className='hero-section-background'>
      <div className='hero-section-container'>
        <div className='section-left'>
          <h1>Little Lemon</h1>
          <h2>Brussels</h2>
          <p>
            Welcome to Little Lemon, a family-owned Mediterranean restaurant where
            tradition meets innovation. Our passion lies in bringing you the authentic
            flavors of the Mediterranean region, while infusing them with a contemporary
            twist that will delight your taste buds.
          </p>
          <NavLink to='/reservations'>
            <button className='button-primary'>Reserve a Table</button>
          </NavLink>
        </div>
        <div className='section-right'>
          <div className='image-box'>
            <img src={HeroImage} alt='Serving delicious dish' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
