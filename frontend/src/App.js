import React from 'react';
import './App.css';
import  Home from"./Components/Home";
import  About from"./Components/About";
import Contact from './Components/Contact';
import Projects from './Components/Projects'


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
