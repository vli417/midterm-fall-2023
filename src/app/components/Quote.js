import React, { useState, useEffect } from 'react';
import funFacts from '../data/fun-facts.json';
import '../globals.css'; // Use an absolute path


function QuoteComponent() {

  // State variables for storing the current fact and a boolean indicating if it's a fun fact.

  const [fact, setFact] = useState('');
  const [isFunFact, setIsFunFact] = useState(false);


  // Function to fetch advice from an external API.
  const fetchInspiration = () => {
    
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setFact(data.slip.advice))
      .catch((error) => console.error('Error fetching data:', error));
  };

  // useEffect hook to fetch the advice initially and whenever it changes.
  useEffect(() => {
    if (!isFunFact) {  // Check if we should fetch advice.
      fetchInspiration(); // Fetch advice if not displaying a fun fact.
    }
  }, [isFunFact]);

   // Function to display a random fun fact from the imported list.
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length); // Generate a random index.
    setFact(funFacts[randomIndex].fact); // Set the state to the random fun fact.
    setIsFunFact(true);   // Update the boolean to showing fun fact.
  };

  // Function to fetch and display new advice.
  const getInspiration = () => {
    setIsFunFact(false); // Set the state to display advice.
    fetchInspiration(); // Fetch the advice.
  };




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

      {/*Button to fetch a new fun fact or advice */}
      <button className= "inspiration-button" onClick={isFunFact ? getRandomFact : getInspiration}>
        {isFunFact ? 'Get Another Fun Fact' : 'Get Another Advice'}
      </button>
    </div>
  );
}

export default QuoteComponent;
