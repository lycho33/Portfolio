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
                <span className='summary'>I have always been a musician and an educator and have always fueled my passion with the adventure of building lifetime skills. As a musician, I was driven to hone my craft to the level of the great masters and dreamed to achieve a level where I was released from the worries of techniques and free to achieve maximum artistic expression. As an educator, my mission was to help students develop the right tools to gain ownership and intrinsic motivation over their learners-journey. Asking carefully scaffolded questions, learning to problem-solve on one's own, understanding one's learning process, and repeatedly reviewing what one's goals are, were all components I believed essential tools.</span>
                <br/><br/><span className='summary'>From years of this pursuit, I realized that my insatiable desire to build and teach skills did not stop with music. I wanted to learn how to build apps. After a month of joining the Flatiron School, I quickly learned that the problem-solving I so enjoyed in my other fields were just as fun when I was coding. Not only could I enjoy the journey of my problem-solving skills improve, the infinite possibilities of making an imagination a reality gave me the same thrill I had felt from music.</span>
                <br/><br/><span className='summary'>Here I am after Flatiron as a full-stack engineer. I have never been more excited to continue my growth. The lessons I learned as a musician/educator have evolved due to programming and I can't wait to see how far I can go.</span>
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
