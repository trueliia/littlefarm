import './App.css';
import React from "react";
import video from "./home.mp4";
import SliderComponent from './SliderComponent';
import FunFacts from './FunFacts';



function Home(){

    return (
        <div>
        <header>
            <h1> FLAVORS OF THE FIELDS</h1>
        </header>
        <video autoPlay muted loop>
         <source src={video} type="video/mp4" />
      </video>
        <main>
        <h2>Welcome To Our Little Farm Store!</h2>
        <h3>Discover a world of freshness and flavor at our farm store. We take pride in cultivating the finest produce with care and dedication, delivering it directly from our fields to your table.</h3>
        <h3>Explore a variety of locally grown fruits, vegetables, and more. Our commitment to sustainable farming practices ensures that each product is not only delicious but also environmentally concious.</h3>
        <h3>Join us on a journey to savor the goodness of nature. From our family to yours, we invite you to experience the difference of farm-fresh quality.</h3>
        </main>
        
        <FunFacts/>
        <SliderComponent/>

        <footer>
            <p className="rights">&copy; 2024 Flavors Of The Fields Website. All rights reserved. Created by Julia Naumova.</p>
        </footer>
    </div>)
}


export default Home;