import '../styles/Sidebar.scss'

import faceImg from './data/img/mug.png'
import QuickNav from './QuickNav'
import Cookies from './Cookies'

const Sidebar = () => {
  return (
    <>
      <div className='me'>
        <h3>Valentin Serra</h3>
        <h4>Software Developer</h4>
        <img className='avatar' src={faceImg} alt='my face' />
        <div className='contact'>
          <ul>
            <li>
              {phoneIcon}
              <span>(+44)7427275482</span>
            </li>
            <li>
              {mailIcon}
              <span>serval.business@gmail.com</span>
            </li>
            <li>
              {linkedInIcon}
              <span>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/valentin-serra-156711ab/'
                >
                  here
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <QuickNav links={quickNavLinks} />
      {/* <hr /> */}
      {/* <Cookies /> */}
    </>
  )
}

export default Sidebar

const quickNavLinks = [
  { id: 'intro', text: 'Introduction' },
  { id: 'projects', text: 'Projects' },
  { id: 'stack', text: 'Tech Stack' },
]

const linkedInIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-2 -2 24 24'
    width='24'
    fill='currentColor'
  >
    <path d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z'></path>
  </svg>
)

const phoneIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-6 -2 24 24'
    width='24'
    fill='currentColor'
  >
    <path d='M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm3 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'></path>
  </svg>
)

const mailIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-2 -5 24 24'
    width='24'
    fill='currentColor'
  >
    <path d='M2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v10h16V2H2zm3 6h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm10-5h2v2h-2V3z'></path>
  </svg>
)
