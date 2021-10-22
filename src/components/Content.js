import '../styles/Content.scss'
import React, { useState, useRef, useEffect } from 'react'
import devstack from './data/devstack.json'
import Intro from './Intro'

const groups = devstack.groups
const associations = devstack.associations

const Content = () => {
  return (
    <>
      <Intro />
      <hr />
      <Stack />
      <hr />
      <Projects />
    </>
  )
}

const makeShiny = (targets, forceUpdate) => {
  targets.forEach((li) => li.classList.add('shiny'))
  forceUpdate()
}

const clearShiny = (targets, forceUpdate) => {
  targets.forEach((li) => li.classList.add('shiny'))
  forceUpdate()
}

const Stack = () => {
  const stackRef = useRef()
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    var lis_map = {}
    for (const li of stackRef.current.getElementsByTagName('li')) {
      lis_map[li.innerHTML] = li
    }

    const lis_to_cleanup = []

    for (const key of Object.keys(associations)) {
      const targets = associations[key].map((a) => lis_map[a])
      const active_li = {
        src: lis_map[key],
        onMouseEnter: () =>
          makeShiny(targets, () => setForceUpdate(!forceUpdate)),
        onMouseLeave: () =>
          clearShiny(targets, () => setForceUpdate(!forceUpdate)),
      }

      console.log(active_li.src)
      console.log(targets)

      active_li.src.addEventListener('mousenter', active_li.onMouseEnter, null)
      active_li.src.addEventListener('mouseleave', active_li.onMouseLeave, null)
      lis_to_cleanup.push(active_li)
    }

    return () => {
      for (const li of lis_to_cleanup) {
        li.src.removeEventListener('mousenter', li.onEnter, null)
        li.src.removeEventListener('mouseleave', li.onLeave, null)
      }
    }
  }, [])

  return (
    <div ref={stackRef} className='stack-container'>
      <h3>Dev Stack</h3>
      <h4>Ordered by familiarity</h4>
      <div className='stack-cols'>
        {groups.map((group) => {
          return (
            <div className='stack'>
              <h5>{group.group}</h5>
              <ul>
                {group.items.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='projects'>
      <h3>My Projects</h3>
      <div className='project-display'>Project</div>
    </div>
  )
}

export default Content
