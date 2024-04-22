import React from 'react'
import './ProjectsHome.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import data from '../../data/projects.json'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel.jsx'


const ProjectsHome = () => {
  return (
    <div className="projects-home-wrapper">
      <div className="projects-home-container">
        <div className="projects-home-text">
          <h1>CHECK OUT MY PROJECTS!!</h1>
          <p>
            I like working on coding projects and building on my knowledge of web development and competitve programming!
          </p>
          <br/>
          <Link to="/projects" className='see-more-link'>
            <span>See my work here</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="projects-home-carousel">
          <ProjectCarousel data={data}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome