import '../styles/Sidebar.scss'

const faceURL =
  'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const Sidebar = () => {
  return (
    <>
      <div className='me'>
        <h3>Valentin Serra</h3>
        <h4>Software Developer</h4>
        <img className='avatar' src={faceURL} alt='my face' />
        <div className='contact'>
          <h5>Contacts</h5>
          <ul>
            <li>(+44)7427275482</li>
            <li>serval.core@gmail.com</li>
            <li>[][][][]</li>
          </ul>
        </div>
      </div>

      <hr />
    </>
  )
}

export default Sidebar
