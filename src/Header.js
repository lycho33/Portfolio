import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import './css/Header.css'

function Header({showNav, setShowNav}) {
  return <header>
      Header
      <div className='icon hamburger'>
        <GiHamburgerMenu size={30} onClick={() => setShowNav(!showNav)}/>
      </div>
  </header>;
}

export default Header;
