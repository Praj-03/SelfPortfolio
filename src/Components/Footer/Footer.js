import React from 'react'
import './Footer.css'
import portfoliologo from '../../Assets/portfoliologo.webp'
import user_icon from '../../Assets/assets/assets/user_icon.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={portfoliologo} alt=''/>
            <p>As a beginner web developer, I'm excited to apply my skills and knowledge to real-world projects.</p>
            </div>
            <div className='footer-top-right'>
             <div className='footer-email-input'>
                <img src={user_icon} alt='' className='user-icon'/> 
                <input type='email' placeholder='Enter your email'/>
                </div>
             <div className='footer-subscribe'>Subscribe</div>
             </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>@ 2025 Prajakta Jadhav.All rights reserved</p>
                <div className='footer-bottom-right'>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>connect with me</p>
                </div>
            </div>
      </div>
  )
}

export default Footer
