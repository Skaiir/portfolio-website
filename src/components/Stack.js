import React, { useState, useRef, useEffect } from 'react'
import devstack from './data/devstack.json'
const groups = devstack.groups
const associations = devstack.associations

const Stack = () => {
  const [toHighlight, setToHighlight] = useState([])
  const stackRef = useRef()

  useEffect(() => {
    var lis_map = {}
    for (const li of stackRef.current.getElementsByTagName('li')) {
      lis_map[li.innerHTML] = li
    }

    const lis_to_cleanup = []

    for (const key of Object.keys(associations)) {
      const targets = associations[key]
      const sr_li = {
        src: lis_map[key],
        onMouseOver: () => setToHighlight([...targets, key]),
        onMouseLeave: () => setToHighlight([]),
      }

      sr_li.src.addEventListener('mouseover', sr_li.onMouseOver, null)
      sr_li.src.addEventListener('mouseleave', sr_li.onMouseLeave, null)
      lis_to_cleanup.push(sr_li)
    }

    return () => {
      for (const li of lis_to_cleanup) {
        li.src.removeEventListener('mouseover', li.onMouseOver, null)
        li.src.removeEventListener('mouseleave', li.onMouseLeave, null)
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
                  <li className={liClassName(i, toHighlight)}>{i}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const liClassName = (item, toHighlight) => {
  return `${toHighlight.includes(item) ? 'highlight-skill' : ''} ${
    item in associations ? 'underline' : ''
  }`
}

export default Stack
