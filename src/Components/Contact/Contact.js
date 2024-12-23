import React, { useRef } from 'react'
import './Contact.css'
import mail_icon from '../../Assets/assets/assets/mail_icon.svg'
import location_icon from '../../Assets/assets/assets/location_icon.svg'
import call_icon from '../../Assets/assets/assets/call_icon.svg'
import theme_pattern from '../../Assets/assets/assets/theme_pattern.svg'

function Contact() {
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "010de2de-43f1-476f-960e-8b635956ffd8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      formRef.current.reset();
      alert(res.message);
    }
  };




  return (
    <div id='contact'className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
               <h1>Let's talk</h1>
                <p>Feel free to talk about anything that you want me to work on.you can contact anytime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                      <img src={mail_icon}alt=''/><p>prajaktajadhav1512003@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={call_icon}alt=''/><p>+91 8766934988</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={location_icon}alt=''/><p>Pirangut,Pune</p>
                    </div>
                </div>
            </div>
            <form ref={formRef} onSubmit={onSubmit} className='contact-right'>
              <label htmlFor=''>Your Name</label>
              <input type='text'  placeholder='Enter your name' name='name' required/>
              <label htmlFor=''>Your Email</label>
              <input type='email'placeholder='Enter Your email' name='email' required/>
              <label htmlFor=''>Write your message here</label>
              <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>
              <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
        {/* <hr/> */}
    </div>
    
  )
}

export default Contact
