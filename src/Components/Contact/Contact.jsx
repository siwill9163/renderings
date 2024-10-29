import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Contact = () => {
  return (
    <div id='contact' className='contact'>

        <div className="container">

            <div className="contact-about">
                <h1>About Brown Envelope</h1>
                <p><span>Brown Envelope.</span> The anonymous complaint email service.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, odio! Distinctio corrupti, impedit saepe ut sapiente optio dicta? Dolores repudiandae saepe id numquam deleniti ad et beatae sequi quia cupiditate.</p>
            </div>
            
            <div className="email-us">
                <h1>Connect With Us</h1>
                <img src={mail_icon} alt="" />
                <p>If you have any ideas on how to make this anonymous email service beter please <a href="mailto:simon.williams@outlook.com">connent with us</a>, thank you.</p>
                <p>Brown Envelope with not keep any of your information.</p>
            </div>

        </div>

        <hr />
        <div className="contact-bottom">
            <p className="contact-subscribe">&#169; 2024 <span>Mr UnLimited ++</span> | All Right Recieved</p>

            <div className="contact-bottom-right">
                <p>Rules</p>
                
                
                <AnchorLink className='anchor-link' href='#navbar'> <p>Back to Envelope</p> </AnchorLink> 
            </div>
        </div>

    </div>
  )
}

export default Contact