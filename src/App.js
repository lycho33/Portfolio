import './css/App.css';
import React, { useRef } from "react"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home' 
import Footer from './margins/Footer'
import About from './pages/About'
import Header from './margins/Header'
import Experience from './pages/Experience';
import Projects from './pages/Projects/Projects'
import {AnimatePresence} from 'framer-motion'
import { linkedList } from "./pages/PagesData"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


function App() {

  const navigate = useNavigate()
  const location = useLocation();
  const myRef = useRef(null)

  const pages = ['/', '/about', '/experience', '/projects']
  pages.map(p => linkedList.append(p))

  const nextIndex = () => {
    navigate(linkedList.nextPage(location.pathname))  
  }

  const prevIndex = () => {
    navigate(linkedList.prevPage(location.pathname))  
  }

  return (
    <div className='App' ref={myRef}>
      <Header />
      <ReactScrollWheelHandler
        upHandler={prevIndex}
        downHandler={nextIndex}
        style={{
          scrollBehavior: "smooth"
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </AnimatePresence>
      </ReactScrollWheelHandler>
      <Footer />
    </div>
  );
}

export default App;
