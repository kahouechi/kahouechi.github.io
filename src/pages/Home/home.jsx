import React from 'react'
import './home.css'
import Hero from '../../components/Hero/Hero.jsx';
import AboutMe from '../../components/AboutMe/AboutMe.jsx';
import ProjectsHome from '../../components/ProjectsHome/ProjectsHome.jsx';
import ContactHome from '../../components/ContactHome/ContactHome.jsx'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="page">
        <AboutMe />
        <ProjectsHome />
        <ContactHome />
      </div>
    </section>
  )
}

export default Home