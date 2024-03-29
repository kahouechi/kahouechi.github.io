import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='h-container'>
        <Link to="/">
          <div className='title'>
            <h1>Kaho's Portfolio!!</h1>
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