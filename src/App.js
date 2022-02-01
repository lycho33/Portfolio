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

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <Nav show={showNav}/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
