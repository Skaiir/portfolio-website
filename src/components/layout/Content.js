import IntroSection from '../IntroSection'
import ProjectsSection from '../ProjectsSection'
import StackSection from '../StackSection'

const Content = () => {
  return (
    <div className='content'>
      <IntroSection />
      <ContentHr />
      <ProjectsSection />
      <ContentHr />
      <StackSection />
      <div style={{ marginBottom: '100px' }}></div>
    </div>
  )
}

const ContentHr = () => (
  <div className='pill-tail'>
    <hr className='pill' />
  </div>
)

export default Content
