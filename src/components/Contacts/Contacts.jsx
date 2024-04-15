import React from 'react'
import './Contacts.css'
import { MdOutlineEmail } from "react-icons/md"

const Contacts = () => {
  return (
    <section className="contacts">
      <div className='contacts-wrapper'>
        <div className='contacts-container'>
          <div className='contact'>
            <MdOutlineEmail/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts