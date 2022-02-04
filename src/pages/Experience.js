import React from 'react';
import '../css/Experience.css'
import {ExperienceData} from './ExperienceData'

function Experience({child}) {
  const handleButtons = () => {
    
  }

  return <div style={child} className='child bg2'>
      <div className='experience-contents'>
        <h1>Experience</h1>
        {ExperienceData.map((info, index) => {
          return (
          <table className='resume'>
            <tr>
              <th className='company'><button>{info.company}</button></th>
              <th className='description'>
                <h3>{info.jobTitle}</h3>
                <li>{info.description}</li>
              </th>
            </tr>
          </table>
          )
        }) }
      </div>
  </div>;
}

export default Experience;
