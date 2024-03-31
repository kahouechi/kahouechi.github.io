import React from 'react'
import Hero from '../../components/Hero/Hero.jsx';
import AboutMe from '../../components/AboutMe/AboutMe.jsx';

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <AboutMe />
    </section>
  )
}

export default Home