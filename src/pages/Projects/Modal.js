import React from 'react'
import { GrClose } from 'react-icons/gr';

function Modal({openModal, setModal, project}) {
   return <>
    {openModal ? 
      <div className='modalWrapper'>
        <div className='modalContent'>
          <div className='modalLinks'>
            <a href={project.repo}><h3>Github Repo</h3></a> 
            <a href="http://"><h3>Demo</h3></a>
          </div>
          <hr />
          <p>{project.description}</p>
        </div>
        <div id='close' aria-label='Close Modal' onClick={() => setModal(prev => !prev)}><GrClose size={20}/></div>
        
      </div>
      : null
    }
   </>
  
}

export default Modal