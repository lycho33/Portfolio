import React, { useState } from "react"
import { VscMenu } from "react-icons/vsc";
import './css/Header.css'

function Header({showNav, setShowNav}) {
  return <header>
      <div className="circle">
          <p className="text">LC</p>
      </div>
      <div className='icon hamburger'>
        <VscMenu size={40} onClick={() => setShowNav(!showNav)}/>
      </div>
  </header>;
}

export default Header;
