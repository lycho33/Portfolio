import {React, useState} from 'react';
import {motion} from 'framer-motion'
import '../../css/Projects.css'
import { allProjects } from '../../Data/projects';
import Project from '../Projects/Project';
import Modal from './Modal';

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

function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])

  
  const renderProjects = allProjects.map((p, index) => 
    <div className='project-info'>
      <div className='image-modal' >
        <Project project={p} key={p.id} open={open} setOpen={setOpen}/>
      </div>
      <Modal openModal={open} project={p} setModal={setOpen} />
    </div>
  )

  return (
    <div>
      <div className='vl'></div>
      <motion.div className='home container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >     

        <h1 className='projects-title'>Projects</h1>
        <div className='projects-info-container'>
            {renderProjects}
        </div>

      </motion.div>
    </div>
  );
}

export default Projects;
