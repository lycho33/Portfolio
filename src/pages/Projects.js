import React from 'react';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

function Projects({child}) {

  return (
    <motion.div className='home container'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div>
          <h1>Projects</h1>
      </div>
    </motion.div>
  );
}

export default Projects;
