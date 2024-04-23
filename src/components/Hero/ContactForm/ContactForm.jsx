import React from 'react'
import './ContactForm.css'
import '../Hero.css'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const ContactForm = () => {

  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "5df5f7e3-28f0-4ac5-a808-bf67fe0a7c44";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  if (result !== null) {
    document.getElementById("result").style.display = "block";
  }

  return (
    <div className="hero-wrapper">
      <div className="hero-container contact-form-container">
        <div className="contact-form-title">
          <h1>CONTACT ME</h1>
          <p>
            I am always up to start a conversation! Feel free to contact me through this form or any of my socials, and I will get back to you as soon as I can.
          </p>
        </div>

        <div onSubmit={handleSubmit(onSubmit)} className='form-wrapper'>
          <h1 className='text-black'>Send me a message!</h1>
          
          <form className='form-container'>
            <input type="text" name="name" placeholder='Your Name' className='contact-input' {...register("name", { required: true })}/>
            <input type="email" name="email" placeholder='Your Email' className='contact-input' {...register("email", { required: true })}/>
            <textarea name="message" placeholder='Your Message' className='contact-input' {...register("message", { required: true })}></textarea>
            <button type="submit">Submit</button>
          </form>

          <div id='result' style={{display:'none'}} className='result'>
            {result}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm