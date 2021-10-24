import '../styles/Content.scss'
import Intro from './Intro'
import RopeCanvas from './RopeCanvas'
import Stack from './Stack'
import Projects from './Projects'

const Content = () => {
  return (
    <>
      <Intro />
      <RopeCanvas canvasHeight={'100px'} ropeThickness={3} />
      <Stack />
      <RopeCanvas canvasHeight={'100px'} ropeThickness={3} />
      <Projects />
    </>
  )
}

export default Content
