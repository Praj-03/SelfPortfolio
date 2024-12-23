import React from 'react'
import './Projects.css'
import  Services_data  from '../../Assets/projects_data'
import theme_pattern from '../../Assets/assets/assets/theme_pattern.svg'
function Projects() {
  return (
    <div id='projects' className='services'>
        <div className="services-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=''/>
        </div>
      <div className='service-container'>
        {Services_data.map((service,index)=>{
        return <div key={index} className='services-format'>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className='services-readmore'></div>
          <p>Read More</p>
          
        </div>
        })}
        
      </div>
    </div>
  )
}

export default Projects
