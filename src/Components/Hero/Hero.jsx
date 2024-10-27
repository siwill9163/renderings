import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>

        <div className="hero-title">
          <h1>Send a Brown Envelope</h1>
        </div>
        
        <form className="envelope">
          <input type="email" name="email" id="" placeholder='Email of the Recipient'/>
          <input type="text" name="subject" id="" placeholder='Subject line' />
          <textarea name="message" rows={8} id="" placeholder='Write your message here'></textarea>
          
          <button className='submit-btn'>Send</button>
         
        </form>

        <div className="hero-rules">
          <ul>
            <li>Keep your subject line clear and concise to ensure your email grabs attention immediately.</li>
            <li>Address the recipient professionally and start with a friendly greeting for a positive tone.</li>
            <li>Avoid any language that could be offensive, including swearing or inappropriate humor in emails.</li>
            <li>Maintain respect for all racial and cultural backgrounds, ensuring inclusive and thoughtful communication.</li>
          </ul>
        </div>
    </div>
  )
}

export default Hero