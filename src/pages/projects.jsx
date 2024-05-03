import React from 'react'
import './projects.css'
import ProjectsHero from '../components/Hero/ProjectsHero.jsx'
import ProjectPreview from '../components/ProjectPreview/ProjectPreview.jsx';

const Projects = () => {
  return (
    <section className="projects">
      <ProjectsHero />
      <div className="page">
        <ProjectPreview />
      </div>
    </section>
  )
}

export default Projects