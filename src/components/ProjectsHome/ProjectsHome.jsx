import React from 'react'
import './ProjectsHome.css'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6"

const ProjectsHome = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <div className="projects-left">
          image
        </div>
        <div className="projects-right">
          <h1 >CHECK OUT MY PROJECTS!!</h1>
          <p>
            I like working on coding projects and building on my knowledge of web development and competitve programming!
          </p>
          <br/>
          <Link to="/projects" className='see-more-link'>
            <FaArrowLeftLong />
            <span>See my work here</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome