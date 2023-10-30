import React, { useState } from 'react';
import funFacts from '../data/fun-facts.json';
import '../globals.css'; 


function FunFactComponent() {
  // Define a state variable to hold the current fun fact
  const [fact, setFact] = useState(''); // Initialize with an empty string.


  //function to get a random fun fact from the fun facts json
  const getRandomFact = () => {
    
    const randomIndex = Math.floor(Math.random() * funFacts.length); // Calculate random index for selecting a fun fact


    setFact(funFacts[randomIndex].fact); // Update the fact state with the randomly selected fun fact
  };

  return (
    <div className="app fun-fact">
      <h1 className="card-title">Fun Fact</h1>

      <p className="typing-animation">{fact}</p>

      <button className="fun-fact-button" onClick={getRandomFact}>Get Another Fun Fact</button>
    </div>
  );
}

export default FunFactComponent;
