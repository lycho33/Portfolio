import './css/App.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import Nav from './Nav'
import Footer from './Footer'
import About from './pages/About'
import Header from './Header'
import Experience from './pages/Experience';
import Projects from './pages/Projects'
import HorizontalScroll from 'react-scroll-horizontal';

function App() {
  const [showNav, setShowNav] = useState(false)
  const child = { width: `100vw`, height: `80%`}

  return (
    <div className='App'>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <Nav show={showNav}/>
      <div className='vertical-line'></div>
        <HorizontalScroll>

          <Routes>
            <Route exact path="/" element={<Home child={child}/>}/>
            <Route path="/about" element={<About child={child}/>}/>
            <Route path="/experience" element={<Experience child={child}/>}/>
            <Route path="/projects" element={<Projects child={child}/>}/>
          </Routes>

          {/* **********PAGES************ */}
          <About child={child}/>
          <Experience child={child}/>
          <Projects child={child}/>
          {/* *************************** */}
        </HorizontalScroll>

        <Footer />
    </div>
  );
}

export default App;
