import { scrollToWithOffset } from '../logic/util/scrolling.js'

const QuickNav = (props) => {
  return (
    <div className='quick-nav'>
      <h5>Jump To</h5>
      {props.links.map((l) => (
        <button
          className='btn btn--keep-pressed btn--bouncy'
          onClick={() => scrollToWithOffset(l.id, -10)}
        >
          {l.text}
        </button>
      ))}
    </div>
  )
}

export default QuickNav
