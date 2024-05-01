import React from 'react'
import './opening.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Opening = () => {

  const pages = [
    {title: "HOME", path: "/home", pic: "./Pages/Home.png"},
    {title: "PROJECTS", path: "/projects", pic: "./Pages/Projects.png"},
    {title: "CONTACT", path: "/contact", pic: "./Pages/Contact.png"},
  ]

  return (
    <section className="opening gradient-background h-lvh">
      <div className='o-container page'>
        <motion.div className="intro-container"
          initial={{ y: 30, scale: 1 }}
          animate={{ y: -70, scale: 0.6 }}
          transition={{
            duration: 2,
            delay: 1.5,
            type: "spring"
          }}
        >
          <motion.div
            initial={{scale: 0.3, opacity: 0}}
            animate={{scale: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring"
            }}
            className="m-10"
          >
            <div>
              <span className='text-2xl text-slate-300'>Hello! I'm</span>
              <h1 className='text-6xl'>KAHO UECHI</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring"
            }}
            className='text-slate-300'
          >
            <h1>Welcome to my website!</h1>
          </motion.div>
        </motion.div>

        <div className='pages-container'>
          {pages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ 
                duration: 0.5,
                delay: (i+10) * 0.2
              }}
            >
              <Link to={page.path} className='page-preview'>
                <span>{page.title}</span>
                <img src={page.pic}/>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Opening