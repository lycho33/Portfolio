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
import Pages from './pages/Pages'
import HorizontalScroll from 'react-scroll-horizontal';

function App() {
  const [showNav, setShowNav] = useState(false)
  const child = { width: `100vw`, height: `80%`}
  return (
    <div className='App'>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <Nav show={showNav}/>
      {/* <div className='vertical-line'></div> */}
      {/* <Pages /> */}
    
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
