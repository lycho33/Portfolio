import React from 'react';
import ProfilePic from '../image/profilePic.jpg'
import '../css/About.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

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
            <p>Software Engineer with experience in Ruby on Rails, JavaScript and React and a background as both an educator and a professional violinist. With a love of problem solving, how others experience something and solving technical problems, I have the tenacity and flexibility to adjust to others in order to accomplish a project. </p>
            <h2>Technical Skills</h2>
            <p>PUT SOME ICONS on each language</p>
            <ul className='languages'>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Ruby</li>
            </ul>
          </div>
          <img src={ProfilePic} alt="Profile Pic" />
        </div>  
        <div className='btn-container-a'>
          <span className='link'><Link to="/experience"><span className='text'><b>Where have I worked?</b></span></Link></span>
        </div>  
    </div>
  </motion.div>
  );
}

export default About;
