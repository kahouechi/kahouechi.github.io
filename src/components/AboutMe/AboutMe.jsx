import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className="am-wrapper">
      <div className="am-container">
        <div className="am-text">
          <h1>GET TO KNOW ME :&#41;</h1>
          <p>
            Hi! My name is Kaho &#40;pronounced kah-ho&#41; and I am a 16 year old high school student.
          </p>
        </div>

        <div className='fun-facts'>
          <div className='fun-fact'>
            <h1>I like to dabble in fashion and music...</h1>
            <p>ksdnfnfkandfn</p>
          </div>
          <div className='fun-fact'>
            <h1>fact</h1>
            <p>des</p>
          </div>
          <div className='fun-fact'>
            <h1>fact</h1>
            <p>des</p>
          </div>
        </div>

        <div className="projects-wrapper">
          <div className="projects-container">
            <div className="projects-left">
              image
            </div>
            <div className="projects-right">
              <h1>CHECK OUT MY PROJECTS!!</h1>
              <p>
                I like working on coding projects and building on my knowledge of web development and competitve programming! <br /> -- Check out my work here
              </p>
            </div>
          </div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-container">
            <h1>CONTACT ME</h1>
            <p>
              I am always up to start a conversation! Feel free to contact me through any of my socials, and I will get back to you as soon as I can.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe