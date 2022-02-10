import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import ProfilePic from '../image/profilePic.jpg'
import '../css/About.css'


function About({child}) {
  return <div style={child} className='child bg1'>
    
      <div className='contents'>
        <div className='bio'>
          <h1 className='about-title'>About Me</h1>
          <p>Software Engineer with experience in Ruby on Rails, JavaScript and React and a background as both an educator and a professional violinist. With a love of problem solving, how others experience something and solving technical problems, I have the tenacity and flexibility to adjust to others in order to accomplish a project. </p>
          <h2>Technical Skills</h2>
          <ul className='languages'>
            <li>React</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>
        </div>
        <img src={ProfilePic} alt="Profile Pic" />
      
      </div>      
  </div>;
}

export default About;
