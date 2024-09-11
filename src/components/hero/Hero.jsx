import React from 'react'
import './Hero.css'
import dark_icon from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>we enshure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge,skills and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark_icon} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero