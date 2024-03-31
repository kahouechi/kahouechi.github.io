import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title">
            <h2>Hello!! My name is</h2>
            <h1>KAHO</h1>
          </div>

          <div className="hero-des">
            <span className='secondaryText'>fjadknalkdnvandfvadf</span>
            <span className='secondaryText'>jdfnakjnvkjandfva</span> <br />
            <button className='log-in-button'>Log In</button>
            <button className='create-accnt-button'>Create an Account</button>
          </div>
        </div>

        {/* right side */}
        <div className="hero-right">
          <div className='image-container'>
            <img src="./images/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero