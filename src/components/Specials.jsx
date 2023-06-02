import React from 'react'
import './styles/Specials.css'
import SpecialsCard from './SpecialsCard'

const Specials = () => {
  return (
    <section className='specials-section-container'>
      <div className='specials-section-title'>
        <h1>This Week's Specials</h1>
        <button className='button-secondary button-special'>Online Menu</button>
      </div>
      <SpecialsCard />
    </section>
  )
}

export default Specials
