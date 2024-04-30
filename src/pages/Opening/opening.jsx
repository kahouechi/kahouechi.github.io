import React from 'react'
import './opening.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Opening = () => {

  const pages = [
    {title: "Home", path: "/home"},
    {title: "Projects", path: "/projects"},
    {title: "Contact", path: "/contact"},
  ]

  return (
    <section className="opening gradient-background h-lvh">
      <div className='o-container page'>
        <motion.div
          initial={{y: -100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            duration: 2,
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

        <div className='pages-container'>
          {pages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: (i+7) * 0.2 }}
            >
              <Link to={page.path}>{page.title}</Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Opening