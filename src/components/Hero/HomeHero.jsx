import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper bg-gradient-to-tr from-violet-950 via-slate-900 to-indigo-950">
      <motion.div
        initial={{y: "-2rem", opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          duration: 3,
          type: "spring"
        }}
        className="hero-container"
      >
        <div className="hero-text">
          <h2>Hello! I'm</h2>
          <h1>KAHO UECHI</h1>
          <p>she/her</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero