import React from "react";
import {  Routes,Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Resume from "./Components/Resume";
import "./App.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">
      <Nav /> {/* Render the navigation menu */}
      <Routes> {/* Renders the first child <Route> that matches the current URL path */}
        <Route exact path="/" element={Home} /> {/* Render the Home component when the URL path is exactly "/" */}
        <Route exact path="/About" element={About} /> {/* Render the About component when the URL path is exactly "/About" */}
        <Route exact path="/Blog" element={Blog} /> {/* Render the Blog component when the URL path is exactly "/Blog" */}
        <Route exact path="/Contact" element={Contact} /> {/* Render the Contact component when the URL path is exactly "/Contact" */}
        <Route exact path="/Projects" element={Projects} /> {/* Render the Projects component when the URL path is exactly "/Projects" */}
        <Route exact path="/Services" element={Services} /> {/* Render the Services component when the URL path is exactly "/Services" */}
        <Route exact path="/Resume" element={Resume} /> {/* Render the Resume component when the URL path is exactly "/Resume" */}
      </Routes>
    </div>
  );
}

export default App;
