import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaDev } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import '../css/Footer.css'

function Footer() {
  return <div className='footer'>
      <div className='contact info--flexbox'>
        <h2>CONTACT</h2>
          <a href="https://github.com/lycho33" className='github'><h1><DiGithubBadge size={40}/> </h1></a>
          <a href="https://dev.to/lycho33" className='dev'><h1><FaDev size={30}/></h1></a>
          <a href="mailto:lydiacho1@outlook.com" className='email'><h1><IoIosMail size={35}/></h1></a>
          <a href="https://www.linkedin.com/in/lydiacho~/" className='linkedin'><BsLinkedin color='white' size={25}/></a>
 
      </div>
  </div>;
}

export default Footer;
