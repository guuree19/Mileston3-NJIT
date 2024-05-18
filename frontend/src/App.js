import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import PostForm from './Components/postForm';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Resume from './Components/Resume';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/PostForm" element={<PostForm />} />

      </Routes>
    </div>
  );
}

export default App;
