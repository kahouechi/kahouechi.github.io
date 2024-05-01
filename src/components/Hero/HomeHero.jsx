import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.section className="hero-wrapper bg-gradient-to-tr from-violet-950 via-slate-900 to-indigo-950"
      initial={{ height: "100vh" }}
      animate={{ height: "auto" }}
      transition={{
        duration: 2,
        delay: 1.4,
        type: "spring"
      }}
    >

      <div className="hero-container">

        <motion.div className="hero-text"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            delay: 1.4,
            type: "spring"
          }}
        >
          <motion.div
            initial={{scale: 0.5, opacity: 0}}
            animate={{scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring"
            }}
            className="hero-text"
          >
            <h2>Hello! I'm</h2>
            <h1>KAHO UECHI</h1>
          </motion.div>

          <motion.p
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring"
            }}
            className='hero-text'
          >
            Welcome to my website!
          </motion.p>
        </motion.div>

      </div>

    </motion.section>
  )
}

export default Hero