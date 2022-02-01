import React, { useState } from "react"
import './css/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    
  return <nav className="sidenav">
      <ul>
          <li>
              {/* <Link to="/about">About</Link> */}
              <a href="/about">About</a>
          </li>
      </ul>
  </nav>;
}

export default Nav;
