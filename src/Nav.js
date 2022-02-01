import React, { useState } from "react"
import './css/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    
  return <nav className="navBar">
      <ul>
          <li>
              <Link to="/about">About</Link>
          </li>
      </ul>
  </nav>;
}

export default Nav;
