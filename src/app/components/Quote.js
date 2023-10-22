import React, { useState, useEffect } from 'react';
import funFacts from '../data/fun-facts.json';
import '../globals.css'; // Use an absolute path


function QuoteComponent() {
  const [fact, setFact] = useState('');
  const [isFunFact, setIsFunFact] = useState(false);

  const fetchInspiration = () => {
    
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setFact(data.slip.advice))
      .catch((error) => console.error('Error fetching data:', error));
  };

 
  useEffect(() => {
    if (!isFunFact) { // Adjust the condition to fetch advice initially
      fetchInspiration();
    }
  }, [isFunFact]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFact(funFacts[randomIndex].fact);
    setIsFunFact(true);
  };

  const getInspiration = () => {
    setIsFunFact(false);
    fetchInspiration(); // Fetch a new inspiration when this button is clicked
  };

   // Initial fetch for both "Advice" and "Fun Fact"


  return (
    <div className={`app ${isFunFact ? 'fun-fact' : 'inspiration'}`}>
      {isFunFact ? (
        <>
          <h1>Daily Fun Fact</h1>
          <p className="typing-animation">{fact}</p>

        </>
      ) : (
        <>
          <h1 className="card-title">Advice</h1>

          <p className="typing-animation">{fact}</p>

        </>
      )}
      <button className= "inspiration-button" onClick={isFunFact ? getRandomFact : getInspiration}>
        {isFunFact ? 'Get Another Fun Fact' : 'Get Another Advice'}
      </button>
    </div>
  );
}

export default QuoteComponent;
