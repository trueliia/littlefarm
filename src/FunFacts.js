import React from 'react';
import './App.css';
import broccoli from './BROCCOLI.PNG';
import { useState } from 'react';
import TypingText from "./TypingText";

const FunFacts = () => {
    const funFactsArray =[
        "Did you know  that our farm has been family-owned for over three generations?",
        "Every product in our store is carefully handpicked to ensure freshness and quality.",
        "Join our loyalty program to receive exclusive discounts and special offers.",
        "We host seasonal events at our farm, inviting the community to celebrate together.",
        "Our farm animals areraised in a humane and athical manner, ensuring their well-being."
    ];
    const [currentFactIndex, setCurrentFactIndex] = useState(0);
    const handleClickNext = () =>{
        const newIndex = (currentFactIndex + 1) % funFactsArray.length;
        setCurrentFactIndex(newIndex);
    };
    return (
        <div className="facts">
            <img src={broccoli} alt="broccoli"/>
        <div className="fun-facts-container">
            <h2>Fun Facts</h2>
            <TypingText text={funFactsArray[currentFactIndex]}/>
          
            <button className="anotherFact" onClick={handleClickNext}>Another Fact</button>
        </div>
        
        </div>
    );
};

export default FunFacts;