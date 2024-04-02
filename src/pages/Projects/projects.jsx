import React from 'react'
import './projects.css'
import ProjectsHero from '../../components/Hero/ProjectsHero.jsx'
import data from '../../data/projects.json'

const Projects = () => {
  return (
    <section className="projects">
      <ProjectsHero />
      <div className="page">
        <div className="projects-container">
          {
            data.map((project, i) => (
              <div className="project">
                <div className="project-top">
                  <h1>{project.heading}</h1>
                  <h2>{project.subheading}</h2>
                </div>
                <img src={project.image}/>
                <p>{project.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects