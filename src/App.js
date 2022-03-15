import './css/App.css';
import React, { useState, useRef } from "react"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home' 
import Footer from './margins/Footer'
import About from './pages/About'
import Header from './margins/Header'
import Experience from './pages/Experience';
import Projects from './pages/Projects/Projects'
import {AnimatePresence} from 'framer-motion'
import { PagesData } from "./pages/PagesData"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function App() {

  const [showNav, setShowNav] = useState(false)
  const [pages, setPages] = useState(PagesData)
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigate = useNavigate()
  const location = useLocation();
  const myRef = useRef(null)

  const nextIndex = () => {
    // const currentPath = PagesData.indexOf(location.pathname)

    setCurrentIndex(currentIndex + 1)
    navigate(pages[currentIndex])
  }

  // const prevIndex = () => {
  //   setCurrentIndex(currentIndex - 1)
  //   navigate(pages[currentIndex])
  //   console.log(currentIndex)
  // }

  // const prevIndex = () => {
  //   const lastPath = PagesData.length - 1
  //   const currentPath = PagesData.indexOf(location.pathname)
  //   setCurrentIndex(PagesData.indexOf(location.pathname))


  //   const prevPath = (currentPath <= lastPath) && currentPath - 1
  //   console.log("p[revious] index,", prevPath)
    
  //   if(currentPath === 0){
  //     return navigate(PagesData[lastPath])
  //   } else if (currentPath === lastPath){
  //     return navigate(PagesData[2])
  //   } 
  //   else 
  //   if (currentPath < PagesData.length && currentPath > 0){
  //     return navigate(PagesData[prevPath])
  //   }
  // }

  return (
    <div className='App' ref={myRef}>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <ReactScrollWheelHandler
        // upHandler={prevIndex}
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
