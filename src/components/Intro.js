import { yearsOfCode, yearsOfDev } from '../logic/helper'

const Intro = () => {
  return (
    <div id='intro' className='intro'>
      <h3>Hello Worlds</h3>
      <p>
        Professionally, I'm a <strong className='shiny'>Front-End</strong>{' '}
        software developer.
        <br />
        So far, I've been in the industry for{' '}
        <strong className='shiny'>{yearsOfDev()}</strong> years.
        <br />
        I've been seriously invested in coding for{' '}
        <strong className='shiny'>{yearsOfCode()}</strong>.
      </p>
      <p>
        {code} <br />
        <span class='shift'>
          My coding interest started early on as a teen when I decided to build
          a forum using a website builder and discovered the ability to embed
          <strong className='shiny'> Javascript</strong>. I learned to make my
          forum snow during winter, and ever since I've been facinated by
          programming.
          <br />
          <br />
          There is no feeling that can quite capture the satisfaction of working
          on a challenging problem hour after hour, experiencing bugs, false
          hope and eventually getting everything to line up perfectly.
          <br />
          <br />
          That feeling is pretty much the reason why I've made coding my career.
        </span>
      </p>
      <p>
        {rocket} <br />
        <span class='shift'>
          In my free time, I am continuously exploring areas of programming
          which are unknown to me. I've played around with neural networks,
          computer graphics, data visualisations, physics simulations,
          procedural art, web dev, native windows applications, and networking
          to mention a few.
          <br />
          <br />
          Coding is fun, coding something new even more so.
        </span>
      </p>
    </div>
  )
}

const rocket = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-2.5 -2.5 24 24'
    width='24'
    fill='currentColor'
  >
    <path d='M9.808 12.971l.076-1.064.927-.529A11.644 11.644 0 0 0 13.243 9.5c2.64-2.641 3.446-5.746 2.475-6.718-.972-.97-4.077-.166-6.718 2.475-.76.76-1.397 1.59-1.878 2.432l-.53.927-1.063.076a3.973 3.973 0 0 0-2.355.988 10.984 10.984 0 0 1 3.351 2.295c.98.98 1.752 2.117 2.295 3.351a3.973 3.973 0 0 0 .988-2.355zM6.835 15.8a6.687 6.687 0 0 1-.663.771C5 17.743 3.232 18.096.868 17.631c-.464-2.363-.11-4.131 1.06-5.303.248-.246.506-.468.772-.663a8.975 8.975 0 0 0-2.598-.81 5.974 5.974 0 0 1 1.473-2.416 5.977 5.977 0 0 1 3.81-1.741 13.637 13.637 0 0 1 2.2-2.855c3.32-3.32 7.594-4.427 9.547-2.475 1.952 1.953.844 6.227-2.475 9.546a13.637 13.637 0 0 1-2.855 2.2 5.977 5.977 0 0 1-1.741 3.81 5.955 5.955 0 0 1-2.416 1.474 8.975 8.975 0 0 0-.81-2.598zM5.11 13.39a2.6 2.6 0 0 0-.54-.415c-.432.15-.94.48-1.405.944-.219.22-.487.959-.49 1.905.946-.003 1.688-.274 1.905-.49.465-.466.795-.973.944-1.405a2.6 2.6 0 0 0-.414-.54zm7.778-7.78a1 1 0 1 1 1.414-1.413A1 1 0 0 1 12.89 5.61z'></path>
  </svg>
)

const code = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-3 -5 24 24'
    width='24'
    fill='currentColor'
  >
    <path d='M5.24264069,6.65685425 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L7.36396103,5.94974747 C7.75448532,6.34027176 7.75448532,6.97343674 7.36396103,7.36396103 L1.70710678,13.0208153 C1.31658249,13.4113396 0.683417511,13.4113396 0.292893219,13.0208153 C-0.0976310729,12.630291 -0.0976310729,11.997126 0.292893219,11.6066017 L5.24264069,6.65685425 Z M9,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 Z'></path>
  </svg>
)

export default Intro
