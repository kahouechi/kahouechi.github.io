import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">

      <div className="f-container">
        <div className='f-title'>
          <span>
            Thank you for reading through my website!
          </span>
        </div>

        <div className='flex-container'>
          <div className="f-left">
            <h1>Contact</h1>
            <span>uechikaho@gmail.com</span>
            <span>647-674-5312</span>
          </div>

          <div className="f-right">
            <h1>Socials</h1>
            <span>
              Check out my socials below!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer