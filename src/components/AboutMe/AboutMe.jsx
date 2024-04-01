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
            <h1>I was born in Japan!</h1>
            <p>
              &#9733;	I was born in Okinawa, Japan, but I moved to Toronto, Canada when I was four years old
            </p>
          </div>

          <div className='fun-fact'>
            <h1>I like to dabble in fashion and music...</h1>
            <p>
              &#9733;	I like exploring different clothing pieces and ways to style them
              <br/>
              <br/>
              &#9733;	I love ALLLLLL genres of music, but my current favourite artists are Childish Gambino, MF DOOM, and Sade!!
            </p>
          </div>

          <div className='fun-fact'>
            <h1>I loovveee food...</h1>
            <p>
              &#9733;	There's nothing better than a good meal or sweet treat :P
            </p>
          </div>
          
          <div className='fun-fact'>
            <h1>I like nature!</h1>
            <p>
              &#9733; I love being in nature, especially sunsets!! So beautiful &#x266C;
              <br/>
              <br/>
              &#9733;	Other than my interest for coding, I like to learn about sustainability. I am currently working on creating a new Youth Climate Action Engagement Strategy as part of the Toronto Schools Youth Climate Leadership Group!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe