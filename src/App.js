import './css/App.css';
import React, { useState, useRef, useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home' 
// import Nav from './margins/Nav'
import Footer from './margins/Footer'
import About from './pages/About'
import Header from './margins/Header'
import Experience from './pages/Experience';
import Projects from './pages/Projects'
import {AnimatePresence} from 'framer-motion'
import { PagesData } from "./pages/PagesData"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function App() {

  const [showNav, setShowNav] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigate = useNavigate()
  const location = useLocation();
  const myRef = useRef(null)

  //not needed....used for testing things
  useEffect(() => {
    console.log("current path", location.pathname)
    const currentPath = PagesData.indexOf(location.pathname)
    console.log("current index", currentPath)
  }, [])

  const nextIndex = () => {
    const currentPath = PagesData.indexOf(location.pathname)

    const nextPath = PagesData[currentPath + 1]
    console.log("next", nextPath)

    if(currentPath === PagesData.length - 1){
      return navigate(PagesData[0])
    } else if (currentPath < PagesData.length){
      return navigate(nextPath)
    }  
  }

  const prevIndex = () => {
    const lastPath = PagesData.length - 1
    
    setCurrentIndex(PagesData.indexOf(location.pathname))


    const prevPath = (currentIndex <= lastPath) && currentIndex - 1
    console.log("p[revious] index,", prevPath)
    
    if(currentIndex === 0){
      return navigate(PagesData[lastPath])
    } else if (currentIndex === lastPath){
      return navigate(PagesData[2])
    } 
    else if (currentIndex < PagesData.length && currentIndex > 0){
      return navigate(PagesData[prevPath])
    }
  }

  return (
    <div className='App' ref={myRef}>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <ReactScrollWheelHandler
        upHandler={prevIndex}
        downHandler={nextIndex}
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
