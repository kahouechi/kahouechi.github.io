import React from 'react'
import './projects.css'
import ProjectsHero from '../../components/Hero/ProjectsHero.jsx'
import data from '../../data/projects.json'
import { MdOpenInNew } from "react-icons/md";

const Projects = () => {
  return (
    <section className="projects">
      <ProjectsHero />
      <div className="page">
        <div className="projects-container">
          {
            data.map((project, i) => (
              <div className="project">
                <div className="project-top pb-5">
                  <h1 className='my-1'>{project.heading}</h1>
                  <h2>{project.subheading}</h2>
                </div>
                <img src={project.image}/>
                <p className='mb-5'>{project.description}</p>
                <div className="view-more-button">
                  <MdOpenInNew /> 
                  <a target="_blank" href={project.link} className='view-more'>
                    View Project
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects