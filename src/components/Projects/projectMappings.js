import Calculator, { calculatorInfo } from './Calculator'
import ClothSim, { clothInfo } from './ClothSim'
import PublicChat from './PublicChat'
import ProjectDescription from './ProjectDescription'
import portfolioImg from '../data/img/portfolio.png'
import rayTracerImg from '../data/img/ray-tracer.png'
import clockGameImg from '../data/img/clock-game.jpg'
import ImgDisplay from './ImgDisplay'
import ParticleSim from './ParticleSim'

const calculatorName = 'calculator'
const clothSimName = 'cloth-sim'
const particleSimName = 'particle-sim'
const thisName = 'this'
const clockGameName = 'clock-game'
const publicChatName = 'public-chat'
const rayTracerName = 'ray-tracer'

export const projects = [
  clothSimName,
  particleSimName,
  rayTracerName,
  calculatorName,
  thisName,
  clockGameName,
]

export const mapProject = (project) => {
  let proj = null
  let info = null

  switch (project) {
    case particleSimName:
      proj = <ParticleSim />
      break

    case calculatorName:
      proj = <Calculator />
      info = calculatorInfo
      break

    case clothSimName:
      proj = <ClothSim />
      info = clothInfo
      break

    case publicChatName:
      proj = <PublicChat />
      break

    case thisName:
      proj = <ImgDisplay img={portfolioImg} alt='this website' />
      info = thisInfo
      break

    case clockGameName:
      proj = (
        <ImgDisplay
          img={clockGameImg}
          alt='clock game'
          text='the playing field'
        />
      )
      info = clockGameInfo
      break

    case rayTracerName:
      proj = (
        <ImgDisplay
          img={rayTracerImg}
          alt='ray tracer'
          text='when multiple nearly perfectly reflective surfaces touch'
        />
      )
      info = rayTracerInfo
      break

    default:
      alert('Project Unmapped')
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

const rayTracerInfo = {
  name: 'Ray Tracing Engine',
  tech: ['HLSL', 'Unity'],
  features: [
    'computes primitives such as spheres, planes, cubes',
    'set basic material properties of primitives, such as colors, reflectivity, opacity',
    'moving around the environment via unity data passed to the shader',
    'anti-aliasing',
  ],
  discussion:
    'I had a week where I became very interested in computer graphics programming. This project particularly blew my mind and involved a ton of research to get all the vector maths right. ',
  improvements: [],
}
