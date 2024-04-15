import React from 'react'
import './ContactForm.css'
import '../../Hero/Hero.css'

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5df5f7e3-28f0-4ac5-a808-bf67fe0a7c44");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-container contact-form-container">
        <div className="contact-form-title">
          <h1>CONTACT ME</h1>
          <p>
            I am always up to start a conversation! Feel free to contact me through this form or any of my socials, and I will get back to you as soon as I can.
          </p>
        </div>

        <form onSubmit={onSubmit} className='form-wrapper'>
          <h1 className='text-black'>Send me a message!</h1>
          <div className='form-container'>
            <input type="text" name="name" placeholder='Your Name' className='contact-input' required/>
            <input type="email" name="email" placeholder='Your Email' className='contact-input' required/>
            <textarea name="message" placeholder='Your Message' className='contact-input' required></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm