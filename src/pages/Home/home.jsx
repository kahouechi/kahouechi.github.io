import React from 'react'
import './home.css'
import Hero from '../../components/Hero/Hero.jsx';
import AboutMe from '../../components/AboutMe/AboutMe.jsx';
import ProjectsHome from '../../components/ProjectsHome/ProjectsHome.jsx';
import ContactHome from '../../components/ContactHome/ContactHome.jsx'
import SeperationLine from '../../components/SeparationLine/SeperationLine.jsx';

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="page">
        <AboutMe />
        <SeperationLine />
        <ProjectsHome />
        <SeperationLine />
        <ContactHome />
      </div>
    </section>
  )
}

export default Home