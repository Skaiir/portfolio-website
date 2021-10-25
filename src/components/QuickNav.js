import '../styles/QuickNav.scss'

const QuickNav = (props) => {
  return (
    <div className='quick-nav'>
      <h5>Jump To</h5>
      {props.links.map((l) => (
        <a className='quick-nav-item' href={'#' + l.id}>
          {l.text}
        </a>
      ))}
    </div>
  )
}

export default QuickNav
