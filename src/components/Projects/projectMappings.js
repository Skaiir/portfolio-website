import Calculator, { calculatorInfo } from './Calculator'
import ClothSim, { clothInfo } from './ClothSim'
import ProjectDescription from './ProjectDescription'
import portfolioImg from '../data/portfolio.png'
import clockGameImg from '../data/otc.jpg'

const calculatorName = 'calculator'
const clothSimName = 'cloth-sim'
const thisName = 'this'
const clockGameName = 'clock-game'

export const projects = [calculatorName, clothSimName, thisName, clockGameName]

export const mapProject = (project) => {
  var proj = null
  var info = null

  if (project === calculatorName) {
    proj = <Calculator />
    info = calculatorInfo
  } else if (project === clothSimName) {
    proj = <ClothSim />
    info = clothInfo
  } else if (project === thisName) {
    // TODO : REFACTOR THIS DUPE CODE
    proj = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          style={{ maxWidth: '400px' }}
          src={portfolioImg}
          alt='this website'
        />
        <h4>I've seen this one somewhere...</h4>
      </div>
    )
    info = thisInfo
  } else if (project === clockGameName) {
    proj = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 10px',
        }}
      >
        <img
          style={{ maxWidth: '400px', borderRadius: '5px' }}
          src={clockGameImg}
          alt='this website'
        />
        <h4>A clock and a gear?</h4>
      </div>
    )
    info = clockGameInfo
  }

  return (
    <>
      {proj != null && proj}
      {info != null && <ProjectDescription info={info} />}
    </>
  )
}

const thisInfo = {
  name: 'SPA portfolio website in React.js',
  tech: ['Javascript', 'React', 'HTML', 'SCSS'],
  features: [
    'various interactive parts to the website',
    'all in one display of my varied experience',
    'all styling and nearly all functionality self implemented',
  ],
  discussion:
    "This is a proof of concept that I am quite comfortable building websites in React in a relatively small timeframe. Of course this is still a work in progress, and I intend to put down a few other interesting projects to better display my adaptability and ability to develop interesting apps. In particular I plan to add some more 'business specific' tooling, host a node.js mock 'API' and interact with it here, as well as add some of my older projects.",
  improvements: [],
}

const clockGameInfo = {
  name: 'Untitled Clock puzzle game',
  tech: ['C#', 'Unity'],
  features: [
    'many different puzzles all centered around the theme of time',
    'two control schemes for touchscreen and mouse',
  ],
  discussion:
    "This project was huge, and is still to be completed. As per pretty much any game project, this involved HEAVY use of OOP. Unity did do a lot of the heavy lifting for collisions and rendering, but I developed a lot of very specific logic for the puzzles we wanted to create. This is currently shelved due to scope issues, but I would love to get back to it one day. I can't show too much of it since the idea is for it to be released in the future.",
  improvements: [],
}
