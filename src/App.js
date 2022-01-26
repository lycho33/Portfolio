import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home' 

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <h1>Hi</h1>
    </>
  );
}

export default App;
