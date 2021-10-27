import '../styles/Content.scss'
import Intro from './Intro'
import Stack from './Stack'
import Projects from './Projects'

const Content = () => {
  return (
    <>
      <Intro />
      <ContentHr />
      <Projects />
      <ContentHr />
      <Stack />
      <div style={{ marginBottom: '100px' }}></div>
    </>
  )
}

const ContentHr = () => (
  <div className='pill-tail'>
    <hr className='pill' />
  </div>
)

export default Content
