import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the visibility of the menu
    };

        return (
            <div className="nav">
                <img src="/Images/a2zLogo.png" className="App-logo" alt="logo" />
    
                <div className="nav__header">
                    <button className="menubar__button" onClick={toggleMenu}>
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>
                </div>
                
                <ul className={`nav__container ${isMenuOpen ? "responsive__nav__show" : ""}`}>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/blog">Blog</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/contact">Contact</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/projects">Projects</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/services">Services</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/resume">Resume/CV</NavLink></li>
                    <li><NavLink onClick={toggleMenu} className="nav-link" to="/postform">Post Form</NavLink></li>
                </ul>
            </div>
        );
    };
    
    export default Nav;
    