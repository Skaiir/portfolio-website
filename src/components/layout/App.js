import '../../styles/styles.scss'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  const isLimitedSpace = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <>
      {!isLimitedSpace && <Sidebar />}

      {isLimitedSpace && <Header />}

      <Content />
    </>
  )
}

export default App
