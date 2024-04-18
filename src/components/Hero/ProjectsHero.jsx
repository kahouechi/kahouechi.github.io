import './Hero.css'
import React from 'react'

const ProjectsHero = () => {
  return (
    <section className="hero-wrapper bg-gradient-to-bl from-sky-900 via-slate-900 to-blue-900">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1 className='sm:text-5xl'>PROJECTS</h1>
            <p>Here are some of the projects I have made, applying my knowledge of different technologies.
            <br /> 
            All of my projects are unfinished at the moment, but I am working on them!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHero