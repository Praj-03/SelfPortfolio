import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/portfoliologo.webp'
// import menu_open from '../../Assets/assets/assets/menu_open.svg'
// import menu_close from '../../Assets/assets/assets/menu_close.svg'
import underline from '../../Assets/assets/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar() {

   const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      
      <img src={logo} alt=""/>
      {/* <img src={menu_open}alt=''/> */}
      <ul className='nav-menu'>
        {/* <img src={menu_close} alt='' className='nav-mob-close'/> */}
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline}alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline}alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}alt=''/>:<></>}</li>
      </ul>
      {/* <div className='nav-github'>Github Profile</div> */}
    </div>
  )
}

export default Navbar
