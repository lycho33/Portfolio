import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home' 
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <h1>Hi</h1>
      <Footer />
    </>
  );
}

export default App;
