import React from 'react'
import './opening.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Opening = () => {

  const pages = [
    {title: "HOME", path: "/home", pic: "./Pages/Home.png", description: "Get to know me!"},
    {title: "PROJECTS", path: "/projects", pic: "./Pages/Projects.png", description: "See my projects!"},
    {title: "CONTACT", path: "/contact", pic: "./Pages/Contact.png", description: "Contact me!"},
  ]

  return (
    <section className="opening gradient-background h-lvh">
      <div className='o-container page'>
        <motion.div className="intro-container"
          initial={{ y: 200, scale: 1 }}
          animate={{ y: 50, scale: 0.7 }}
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
            className="m-8"
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
          >
            <span className='text-slate-300 text-2xl'>Welcome to my website!</span>
          </motion.div>
        </motion.div>

        <div className='pages-container'>
          {pages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ 
                duration: 0.7,
                delay: (i+10) * 0.2
              }}
            >
              <Link to={page.path} className='page-preview'>
                <h1 className='font-semibold text-xl text-black'>{page.title}</h1>
                <hr className='w-10/12 border-[0.9px] border-purple-900'/>
                <img src={page.pic}/>
                <span>{page.description}</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Opening