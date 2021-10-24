const ProjectDescription = (props) => {
  const info = props.info
  return (
    <>
      <hr className='project-hr' />
      <div className='project-description'>
        <h4>{info.name}</h4>
        <div className='tech-list'>
          <h6>tech:</h6>
          {info.tech.map((t) => (
            <div className='tech'>{t}</div>
          ))}
        </div>

        <h5>Features:</h5>
        <ul className='features-list'>
          {info.features.map((f) => (
            <li>{' - ' + f}</li>
          ))}
        </ul>
        <p className='discussion'>{info.discussion}</p>
      </div>
    </>
  )
}

export default ProjectDescription
