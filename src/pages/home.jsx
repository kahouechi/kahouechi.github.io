import React from 'react'
import Hero from '../components/Hero/HomeHero.jsx';
import AboutMe from '../components/AboutMe/AboutMe.jsx';
import ProjectsHome from '../components/ProjectsHome/ProjectsHome.jsx';

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="page">
        <AboutMe />
        <hr/>
        <ProjectsHome />
      </div>
    </section>
  )
}

export default Home