import React, { useState } from "react"
import './css/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    
  return <nav className="sidenav active">
      <ul>
          <li>
              <Link to="/about"><span>About</span></Link>
          </li>
      </ul>
  </nav>;
}

export default Nav;
