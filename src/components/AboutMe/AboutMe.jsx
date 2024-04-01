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
          <p>
            I like working on coding projects and building on my knowledge of web development and competitve programming!
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

        <div className="projects-container">
          <h1>CHECK OUT MY PROJECTS!</h1>
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe