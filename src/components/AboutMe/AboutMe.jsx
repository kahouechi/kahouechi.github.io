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
            <h1>I like being creative!</h1>
            <p>I like to dabble in fashion, music, and art... <br /> 
            <br />
            I love ALLLLLL genres of music, but my current favourite artists are Childish Gambino, MF DOOM, and Sade!!
            </p>
          </div>
          <div className='fun-fact'>
            <h1>I was born in Japan!</h1>
            <p>I was born in Okinawa, Japan, but I moved to Toronto, Canada when I was four years old!</p>
          </div>
          <div className='fun-fact'>
            <h1>I'm interested in sustainability!</h1>
            <p>des</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe