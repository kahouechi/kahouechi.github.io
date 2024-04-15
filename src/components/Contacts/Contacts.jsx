import React from 'react'
import './Contacts.css'
import { MdOutlineEmail } from "react-icons/md"
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contacts = () => {
  return (
    <section className="contacts">
      <div className='contacts-wrapper'>
        <div className='contacts-container'>
          <div className='contact-info'>
            <div className='contact-info-left'>
              <MdOutlineEmail/>
            </div>
            <div className='contact-info-right'>
              <h1>Email</h1>
              <p>uechikaho@gmail.com</p>
            </div>
          </div>

          <div className='contact-info'>
            <div className='contact-info-left'>
              <FaPhoneFlip/>
            </div>
            <div className='contact-info-right'>
              <h1>Phone</h1>
              <p>647-674-5312</p>
            </div>
          </div>

          <div className='contact-info'>
            <div className='contact-info-left'>
              <FaGithub/>
            </div>
            <div className='contact-info-right'>
              <h1>GitHub</h1>
              <p>@kahouechi</p>
            </div>
          </div>

          <div className='contact-info'>
            <div className='contact-info-left'>
              <FaLinkedin/>
            </div>
            <div className='contact-info-right'>
              <h1>LinkedIn</h1>
              <p>linkedin.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts