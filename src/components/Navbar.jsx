import React from 'react'
// import img from '../assets/images/logo.jpeg'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className="container nav__container">
        <div className="logo">
          {/* <img src={img} alt="img" /> */}
        </div>
        <div href="#" className={ activeNav === '#' ? 'links active' : 'links'}>
            <a href="/">Projects</a>
            <a href="#skills" onClick={() => setActiveNav("#about") } className={ activeNav === '#' ? 'active' : ''}>Skills</a>
            <a href="/">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
