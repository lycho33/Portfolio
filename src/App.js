import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home' 
import Nav from './Nav'
import Footer from './Footer'
import About from './About'

function App() {
  return (
    <>
      <header>Header</header>
      <Nav />

      <h1>Hi</h1>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
