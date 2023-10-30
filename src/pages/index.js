import React, { useState } from 'react';
import { Inter } from 'next/font/google'; // Import font


import QuoteComponent from '../app/components/Quote';
import FunFactComponent from '../app/components/FunFact';
import ToggleButton from '../app/components/ToggleButton';

const inter = Inter({ subsets: ['latin'] }); // font settings



export default function Home() {

  // By default, it starts with showing a quote.
  const [showQuote, setShowQuote] = useState(true);

  // When the toggle button is clicked, this function will switch between showing a quote or a fun fact.
  const handleToggle = () => {
    setShowQuote(!showQuote); // Toggle the value of showQuote between true and false.
  };

  return (
    <div>
       {/* This button lets us switch between quotes and fun facts. */}
      <ToggleButton onToggle={handleToggle} />

      {/* If showQuote is true, show the QuoteComponent. Otherwise, show FunFactComponent. */}
      {showQuote ? <QuoteComponent /> : <FunFactComponent />}
    </div>
  );
}
