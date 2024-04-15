import React from 'react'
import './contact.css'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import Contacts from '../../components/Contacts/Contacts.jsx'

const contact = () => {
  return (
    <section className="contact bg-gradient-to-tr from-violet-950 via-slate-900 to-indigo-950">
      <div className='contact-form'>
        <ContactForm />
        <Contacts />
      </div>
    </section>
  )
}

export default contact