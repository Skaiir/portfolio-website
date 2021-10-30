import faceImg from '../data/img/mug.png'

const Header = () => (
  <>
    <div className='header'>
      <div className='banner'>
        <img class='avatar avatar--big' src={faceImg} alt='my face' />
        <div className='banner-text'>
          <h1>Valentin Serra</h1>
          <h4>
            Coding cool contraptions through copious consumption of caffeine
          </h4>
        </div>
      </div>
    </div>
  </>
)

export default Header
