import { yearsOfDev } from '../logic/helper'

const Intro = () => {
  return (
    <div className='intro'>
      <h3>Hi, I'm Valentin</h3>
      <p>
        I'm a dev, specialising in
        <strong className='shiny'> Front-End</strong> development. <br /> I've
        been in the industry for {yearsOfDev()} years. I started getting serious
        with coding 5 years prior to that.
      </p>
      <p>
        My coding interest started early on as a teen when I decided to build a
        forum using a website builder and discovered the ability to embed
        Javascript. I learned to make my forum snow during winter, and ever
        since I've been facinated by programming.
      </p>
      <p>
        Game development, APIs, Simulations, Web Dev, Networking, anything I
        didn't understand yet made me curious, and has led me down sleepless
        coding rabbit holes. Coding has given me (a person not particularly
        gifted with their hands) a creative outlet and something to consistently
        challenge myself and improve at. It's satisfying, ever-changing and
        offers an endless supply of problems to solve.
      </p>
      <p>
        Most of my <strong>professional</strong> experience has been dealing
        with complex desktop applications in an enterprise environments in C#
        using the .NET framework. My <strong>personal </strong>
        experience in development has been a bit of everything else.
      </p>
      <p className='nomarg'>
        <strong className='warning'>I am not a designer</strong>, if that's not
        already apparent 😁. <br /> But one thing is for certain: <br /> <br />
        <strong> I'll make your designs come to life</strong>.
      </p>
      <br />
      <p>
        <strong className='warning'>
          This website is under construction...
        </strong>
      </p>
    </div>
  )
}

export default Intro
