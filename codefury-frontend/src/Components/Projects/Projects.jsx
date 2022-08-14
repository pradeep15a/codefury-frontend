import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import ProjectCard from './Project/ProjectCard'
import './Projects.css'

export default function Projects() {
  const data = useSelector((state) => state.projects)
  console.log(data);
  
  return (
    <div className='project-cards-container'>
      <Header
        heading="Projects Page"
        details="This is projects page"
      />
      {
        data.map((project) => {
          return (
              <ProjectCard project={project} />
          );
        })
      }

    </div>
  )
}
