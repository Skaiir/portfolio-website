import React, { useState, useRef, useEffect } from 'react'
import { projects, mapProject } from './projects/projectMappings'
import TitledSection from './TitledSection'
import { scrollToWithOffset } from '../logic/util/scrolling'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    scrollToWithOffset('projects', -10)
  }, [selectedProject])

  return (
    <TitledSection name='projects' title='Some Projects'>
      <div className='projects-display'>
        <ProjectsNav
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        {mapProject(selectedProject)}
      </div>
    </TitledSection>
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

export default ProjectsSection
