import React from 'react';
import './App.css';
import { useState } from 'react';
import TypingText from "./TypingText";

const FunFacts = () => {
    const funFactsArray =[
        "Did you know  that our farm has been family-owned for over three generations?",
        "Every product in our store is carefully handpicked.",
        "Join our loyalty program to receive exclusive discounts.",
        "Chickens can be extroverts.",
        "We host seasonal events, inviting the community to celebrate together.",
        "Our farm animals are raised in a humane and athical manner.",
        "The best fertilizer is the farmer's shadow.",
        "An apple tree can live for more than 100 years.",
        "Pigs can be trained to perform tricks.",
        
    ];
    const [currentFactIndex, setCurrentFactIndex] = useState(0);
    const handleClickNext = () =>{
        const newIndex = (currentFactIndex + 1) % funFactsArray.length;
        setCurrentFactIndex(newIndex);
    };
    return (
        <div className="fun-facts-container">
            <h2>Fun Facts</h2>
            <TypingText text={funFactsArray[currentFactIndex]}/>
            <button className="anotherFact" onClick={handleClickNext}>Another Fact</button>
        </div>
        

    );
};

export default FunFacts;