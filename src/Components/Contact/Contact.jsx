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
                <p>The anonymous email service.</p>
                <p>None of your details are required. Totally anonymous</p>
                <p>Just complete the form above. The Brown Envelope email will be anonymously send to the recipient, fast and free. </p>
            </div>
            
            <div className="email-us">
                <h1>Contact Us With Suggestions</h1>
                <img src={mail_icon} alt="" />
                <p>If you have any ideas on how to make this anonymous email service beter please <a href="mailto:hello-anonymous@outlook.com">connent with us</a>, thank you.</p>
                <p>Brown Envelope with not keep any of your information.</p>
            </div>

        </div>

        <hr />
        <div className="contact-bottom">
            <p className="contact-subscribe">&#169; 2024 <span>Mr UnLimited</span> | All Right Recieved</p>

            <div className="contact-bottom-right">
                <p>Rules</p>
                
                
                <AnchorLink className='anchor-link' href='#navbar'> <p>Back to Envelope</p> </AnchorLink> 
            </div>
        </div>

    </div>
  )
}

export default Contact