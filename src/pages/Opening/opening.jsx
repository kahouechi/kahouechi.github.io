import React from 'react'
import './opening.css'
import { motion, AnimatePresence } from 'framer-motion'
 
const Opening = () => {
  return (
    <section className="opening gradient-background h-lvh">
      <div className='o-container page'>
        <motion.div
          initial={{y: -80, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            duration: 4,
            type: "spring"
          }}
          className="intro-container"
        >
          <div className="intro-text">
            <span className='text-2xl text-slate-400'>Hello! I'm</span>
            <h1 className='text-7xl'>KAHO UECHI</h1>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{scale: 0.5, opacity: 0}}
            animate={{scale: 1, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 2,
              type: "spring"
            }}
          >
            <h1>Welcome to my website!</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Opening