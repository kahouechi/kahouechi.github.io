import React from 'react'
import ContactForm from '../components/Hero/ContactForm/ContactForm.jsx'
import Contacts from '../components/Contacts/Contacts.jsx'

const Contact = () => {
  return (
    <section className="contact">
      <div className='bg-gradient-to-tr from-indigo-950 via-slate-900 to-violet-950'>
        <ContactForm />
      </div>
      <div className='page'>
        <Contacts />
      </div>
    </section>
  )
}

export default Contact