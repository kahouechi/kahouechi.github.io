import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { IoMdMenu } from "react-icons/io";
import { scrollToTop } from '../../utils/scrollToTop.js'

const Header = () => {

  //change header background when scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100)
      setColor(true);
    else
      setColor(false);
  }

  window.addEventListener('scroll', changeColor);

  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className={color ? 'h-wrapper h-scroll' : 'h-wrapper'}>
      <div className='h-container'>

        <Link to="/" onClick={scrollToTop}>
          <div className='title'>
            <h1 className='m-0'>KAHO</h1>
          </div>
        </Link>

        <div className='h-menu'
          style={getMenuStyles(menuOpened)}
          onClick={() => setMenuOpened((prev)=>!prev)}>
          <Link to="/" onClick={scrollToTop}>HOME</Link>
          <Link to="/projects" onClick={scrollToTop}>PROJECTS</Link>
          {/* <Link to="/resume">RESUME</Link> */}
          <Link to="/contact" onClick={scrollToTop}>CONTACT</Link>
        </div>
      </div>

      <div className='mobile-button' onClick={() => setMenuOpened((prev)=>!prev)}>
        <IoMdMenu size={25} />
      </div>
    </section>
  )
}

export default Header