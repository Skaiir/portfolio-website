import '../styles/App.scss'
import Sidebar from './Sidebar'
import Content from './Content'

const App = () => {
  return (
    <>
      <div className='divider' />
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Content />
      </div>
      <div className='divider' />
    </>
  )
}

export default App
