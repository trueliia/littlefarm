import './App.css';
import React from "react";
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
  
  return (
    <Router>
      <nav className="hamnav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
        <div id="hamitems">
          <Link to="/" className='link'>Home</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/about" className='link'>About Us</Link>
          <Link to="/contact" className='link'>Contact</Link>
          <Link to="/yourcart" className='link'>
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