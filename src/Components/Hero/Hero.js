import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div id='home' className='hero'>
      <h1><span>I'm Prajakta Jadhav</span>,a driven and passionate individual<br></br> with a strong desire to create innovative<br></br> and user-friendly web applications</h1>
      <p>This portfolio showcase my progress,projects,and skills acquired through online courses,tutorials,and personal experiments</p>
      <div className='hero-action'>
        <a href='https://github.com/Praj-03' target='_blank' rel='noreferrer' className='hero-connect'>Github Profile</a>
        <a href='https://drive.google.com/file/d/1FwqnfyRygrjI92xL2ek7WsGwkkFnc1Qe/view?usp=drivesdk ' target='_blank' rel='noreferrer' className='hero-resume'>My Resume</a>
      </div>
    </div>
  )
}

export default Hero
