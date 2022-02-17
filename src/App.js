import './css/App.css';
import React, { useState } from "react"
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home' 
import Nav from './margins/Nav'
import Footer from './margins/Footer'
import About from './pages/About'
import Header from './margins/Header'
import Experience from './pages/Experience';
import Projects from './pages/Projects'
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();

  const [showNav, setShowNav] = useState(false)

  return (
    <div className='App'>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      {/* <Nav show={showNav}/> */}

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
