import './Hero.css'
import React from 'react'
import {motion} from 'framer-motion'

const ProjectsHero = () => {
  return (
    <section className="hero-wrapper bg-gradient-to-bl from-sky-900 via-slate-900 to-blue-900">
      <motion.div
        initial={{y: "-2rem", opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          duration: 2,
          type: "spring"
        }}
        className="hero-container"
      >
        <div className="hero-text">
          <h1>PROJECTS</h1>
          <p>Here are some of the projects I have made, applying my knowledge of different technologies. All of my projects are unfinished at the moment, but I am working on them!</p>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsHero