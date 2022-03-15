import React, { useEffect } from 'react';
import ProfilePic from '../image/profilePic.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/About.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiSqlite, SiJavascript, SiRubyonrails  } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

function About() {

  return (
    <div>
      <div className='vl'></div>
      <motion.div className='home container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          <div className='contents'>
            <div className='bio'>
              <h1 className='about-title'>About Me</h1>
              <p>
                <span className='summary'>Hello! I am a full-stack developer with a passion for dynamic user experiences and a deep love for the creative process of developing effective real-world solutions. Previously, I was a violinist and teacher, where the root of my joy in both fields was obsessing over techniques and cognition learning. When shifting over to programming, I quickly discovered the same thrill and creativity I so loved. On top of this, programming allows me to put my accumulative experience into invigorating new challenges.</span>
                <br/><br/><span className='summary'>
                Fast-forward, now I am seeking opportunities to continue my growth as a developer. In the meantime, you'll soon be seeing more projects I've been tinkering. Don't worry, I am still teaching and playing the violin when I'm not coding.  
                </span>
              </p>
              <h2>Technical Skills</h2>
              <ul className='languages'>
                <li><FaReact size={30}color="#02FFF0"/><span className='lang-name'> React</span></li>
                <li><SiRedux size={30}color="#8A2BE2"/><span className='lang-name'> Redux</span> </li>
                <li><SiJavascript size={30}color="yellow"/><span className='lang-name'> JavaScript</span> </li>
                <li><DiRuby size={30}color="red"/><span className='lang-name'>Ruby</span> </li>
                <li><SiRubyonrails color='red' size={60}/><span className='lang-name'>Ruby on Rails</span> </li>
                <li><AiFillGithub color='black' size={30}/><span className='lang-name'>Github</span> </li>
                <li><SiSqlite color='blue' size={30}/><span className='lang-name'>Sqlite3</span> </li>
              </ul>
            </div>
            <img src={ProfilePic} alt="Profile Pic" />
          </div>  
          {/* <div className='btn-container-a'>
            <span className='link'><Link to="/experience"><span className='text'><b>Where have I worked?</b></span></Link></span>
          </div>   */}
      </div>
    </motion.div>
  </div>
  );
}

export default About;
