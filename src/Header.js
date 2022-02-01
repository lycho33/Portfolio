import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import './css/Header.css'

function Header() {
  return <header>
      Header
      <div className='icon hamburger'>
        <GiHamburgerMenu size={30}/>
      </div>
  </header>;
}

export default Header;
