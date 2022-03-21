import React from 'react'
import '../../css/Projects.css'

function Project({project, key, open, setOpen}) {

    const imageClick = (id) => {
        setOpen(prev => !prev)
    }

  return (
    <div className='image-modal' key={key}>
        <img src={project.image} onClick={imageClick}/>
        <h2>{project.name}</h2>
    </div>
  )
}

export default Project