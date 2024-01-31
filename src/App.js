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


function App(){
  return(
    <Router>
      <nav>
      <Link to="/" className='link'>Home</Link>
        <Link to="/shop" className='link'>Shop</Link>
        <Link to="/about" className='link'>About Us</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App;