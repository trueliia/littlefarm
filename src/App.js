import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Shop from './Shop';
import Contact from './Contact';
import YourCart from './YourCart';


function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className='link' onClick={closeMenu}>Home</Link>
          <Link to="/shop" className='link' onClick={closeMenu}>Shop</Link>
          <Link to="/about" className='link' onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className='link' onClick={closeMenu}>Contact</Link>
          <Link to="/yourcart" className='link' onClick={closeMenu}>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt='cart'/>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/yourcart" element={<YourCart/>}/>
      </Routes>
    </Router>
  
    
  )
}

export default App;