import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { VscMenu } from "react-icons/vsc";
import '../css/Header.css'

function Header({showNav, setShowNav}) {

  return <header>
      <Link to="/">
        <div className="circle">
            <p className="text">LC</p>
        </div>
      </Link>
      <div className='home-page-slider'>
        <ul>
          <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
          <Link to="/experience" style={{ textDecoration: 'none' }}><li>Experience</li></Link>
          <Link to="/projects" style={{ textDecoration: 'none' }}><li>Projects</li></Link>
        </ul>
      </div>
      {/* <div className='icon hamburger'>
        <VscMenu size={40} onClick={() => setShowNav(!showNav)}/>
      </div> */}
  </header>;
}

export default Header;
