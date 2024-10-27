import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="logo">
            <h1>Brown Envelope</h1>
        </div>

        <div className="nav-menu">
            <ul>
                <li>Send</li>
                <li>Rules</li>
                <li>Contact</li>
            </ul>
        </div>

        
    </div>
  )
}

export default Navbar