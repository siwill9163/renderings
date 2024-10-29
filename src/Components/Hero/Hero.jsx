import React from 'react'
import './Hero.css'

const Hero = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "15d81bee-3d66-44de-8d97-8289de2785f6");

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
      alert(res.message);
    }
  };

  return (
    <div id='home' className='hero'>

        <div className="hero-title">
          <h1>Send a Brown Envelope</h1>
        </div>
        
        <form onSubmit={onSubmit} className="envelope">
          <input type="email" name="email" id="" placeholder='Email of the Recipient'/>
          <input type="text" name="subject" id="" placeholder='Subject line' />
          <textarea name="message" rows={8} id="" placeholder='Write your message here'></textarea>
          
          <button className='submit-btn'>Send</button>
         
        </form>

        <div className="hero-rules">
          <ul>
            <li className='li-cap'>All messages will arrive from <span>hello-anonymous@outlook.com</span> - Allow 24 hours for emails to arrive</li>
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