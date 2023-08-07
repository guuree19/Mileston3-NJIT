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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Resume" element={<Resume />} />
        <Route exact path="/PostForm" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
