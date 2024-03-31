import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  //change header background when scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90)
      setColor(true);
    else
      setColor(false);
  }

  window.addEventListener('scroll', changeColor);

  return (
    <section className={color ? 'h-wrapper h-bg' : 'h-wrapper'}>
      <div className='h-container'>
        <Link to="/">
          <div className='title'>
            <h1>Kaho</h1>
          </div>
        </Link>

        <div className='h-menu'>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/resume">RESUME</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </section>
  )
}

export default Header