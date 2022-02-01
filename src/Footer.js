import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaDev } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './css/Footer.css'

const ColoredLine = ({ color }) => (
    <hr style={{color, backgroundColor: color, height: 1.5}} />
);

function Footer() {
  return <div className='footer'>
      {/* <ColoredLine color="#6eff3c" /> */}
      {/* <hr /> */}
      <div className='contact info--flexbox'>
        <h2>CONTACT</h2>
        <a href="https://github.com/lycho33" className='github'><h1><DiGithubBadge size={42}/> </h1></a>
        <a href="https://dev.to/lycho33" className='dev'><h1><FaDev size={42}/></h1></a>
        {/* <a href="mailto:lydiacho1@outlook.com" className='email'><h1><IoIosMail size={52}/></h1></a> */}
      </div>
  </div>;
}

export default Footer;
