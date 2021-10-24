import React, { useState } from 'react'
import { projects, mapProject } from './Projects/projectMappings'
import '../styles/Projects.scss'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  return (
    <div className='projects'>
      <h3>My Projects</h3>
      <div className='projects-display'>
        <ProjectsNav
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        {mapProject(selectedProject)}
      </div>
    </div>
  )
}

const ProjectsNav = (props) => {
  const { selectedProject, setSelectedProject } = props
  return (
    <nav className='projects-nav' role='navigation'>
      {projects.map((p) => (
        <div
          onClick={() => setSelectedProject(p)}
          className={buildNavItemClassName(p === selectedProject)}
        >
          {p}
        </div>
      ))}
    </nav>
  )
}

const buildNavItemClassName = (isSelected) =>
  isSelected ? 'projects-nav-item nav-selected' : 'projects-nav-item'

export default Projects