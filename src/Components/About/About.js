import React from 'react'
import './About.css'
import about from '../../Assets/aboutme.jpg'
import theme_pattern from '../../Assets/assets/assets/theme_pattern.svg'

function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
             <img src={theme_pattern} alt=''/>
        </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={about}alt=''/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I'm Prajakta Jadhav, an aspiring web developer looking to make a mark in the industry. </p>
            <p>This portfolio represents my journey, skills, and projects as I strive to become a proficient web developer. </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>REACT JS</p><hr style={{width:"40%"}}/></div>
            <div className='about-skill'><p>JAVASCRIPT</p><hr style={{width:"30%"}}/></div>
            <div className='about-skill'><p> EXPRESSJS</p><hr style={{width:"30%"}}/></div>
            <div className='about-skill'><p>MONGODB</p><hr style={{width:"40%"}}/></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
