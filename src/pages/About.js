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
              <p className='font-link'>Software Engineer with experience in Ruby on Rails, JavaScript and React and a background as both an educator and a professional violinist. With a love of problem solving, how others experience something and solving technical problems, I have the tenacity and flexibility to adjust to others in order to accomplish a project. </p>
              <h2>Technical Skills</h2>
              <ul className='languages'>
                <li><FaReact size={30}color="#02FFF0"/><span className='lang-name'> React</span></li>
                <li><SiRedux size={30}color="#8A2BE2"/><span className='lang-name'> Redux</span> </li>
                <li><SiJavascript size={30}color="yellow"/><span className='lang-name'> JavaScript</span> </li>
                <li><DiRuby size={30}color="red"/><span className='lang-name'>Ruby</span> </li>
                <li><SiRubyonrails color='red' size={60}/><span className='lang-name'>Ruby on Rails</span> </li>
              </ul>
              <ul className='languages' style={{ marginTop: '-15px' }}>
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
