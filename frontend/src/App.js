import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import '../Nav.css';
import  Home from"./Components/Home";
import  Nav from"./Components/Nav";
import  About from"./Components/About";
import Contact from './Components/Contact';
import Projects from './Components/Projects'


function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>  
          <Route  path="/" element={<Home />} />
          <Route  path="/About" element={<About />} />
          <Route path="/Contact" element={ <Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;
