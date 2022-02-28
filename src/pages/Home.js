import React from 'react';
import '../css/Home.css'
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

function Home() {
  return (
    <>
      <div className='vl'></div>
      <motion.div className='home container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>

          <div className='intro'>
            <h1>Lydia Cho</h1>
            <h2 className='title'>Full-Stack Software Engineer</h2>
          </div>
          <div className='btn-container'>
            <h3>Scroll Down to Begin</h3>
          </div>
          {/* <div className='btn-container'>
            <span className='link'><Link to="/about"><span className='text'><b>Who Am I?</b></span></Link></span>
          </div> */}

        </div>
      </motion.div>
    </>
  );
}

export default Home;
