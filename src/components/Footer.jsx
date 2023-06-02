import React from 'react'
import Logo from './assets/logo.png'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-background'>
        <div className='footer-container'>
          <img src={Logo} alt='Little Lemon logo' />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and
            classic cocktails in a lively but casual environment. The restaurant features
            a locally sourced menu with daily specials.
          </p>
          <div className='footer-content'>
            <div className='locations'>
              <h5>LOCATIONS</h5>
              <ul>
                <li>Location 1</li>
                <li>Location 2</li>
                <li>Location 3</li>
                <li>Location 4</li>
              </ul>
            </div>
            <div className='opening-times'>
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className='contact'>
              <h5>CONTACT US</h5>
              <ul>
                <li>148 S Hwy 281, Evant, TX 76525, United States</li>
                <li>Tel: 020 7928 0678</li>
                <li>Email: fake@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className='copyright'>
            <p>© {new Date().getFullYear()} Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
