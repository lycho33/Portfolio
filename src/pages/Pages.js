import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../css/App.css';
import Home from './Home' 
import About from './About'
import Header from '../Header'
import Experience from './Experience';
import Projects from './Projects'
import HorizontalScroll from 'react-scroll-horizontal';

function Pages() {
    const child = { width: `100vw`, height: `80%`}

  return <div>
      <h1>Pages</h1>
        <HorizontalScroll>
            <About child={child}/>
            <Experience child={child}/>
            <Projects child={child}/>
        </HorizontalScroll>
  </div>;
}

export default Pages;
