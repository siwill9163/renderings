import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div id='navbar' className='navbar'>

        <div className="logo">
            <h1>Brown Envelope</h1>
        </div>

        <div className="nav-menu">
            <AnchorLink className='anchor-link' href='#contact'> <button>Contact</button> </AnchorLink>  
        </div>

        
    </div>
  )
}

export default Navbar