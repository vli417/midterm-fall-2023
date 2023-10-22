import React, { useState } from 'react';
import funFacts from '../data/fun-facts.json';
import '../globals.css'; // Use an absolute path


function FunFactComponent() {
  const [fact, setFact] = useState('');

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFact(funFacts[randomIndex].fact);
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
