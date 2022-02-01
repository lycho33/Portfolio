import React, { useState } from "react"
import './css/Nav.css'
import { Link } from 'react-router-dom'


function Nav({show}) {
    
  return <nav className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
          <li>
              <Link to="/about"><span>About</span></Link>
          </li>
          <li>
              <Link to="/experience"><span>Experience</span></Link>
          </li>
          <li>
              <Link to="/Projects"><span>Projects</span></Link>
          </li>
      </ul>
  </nav>;
}

export default Nav;
