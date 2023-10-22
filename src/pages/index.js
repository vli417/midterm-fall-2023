import React, { useState } from 'react';
import { Inter } from 'next/font/google'; // Import font


import QuoteComponent from '../app/components/Quote';
import FunFactComponent from '../app/components/FunFact';
import ToggleButton from '../app/components/ToggleButton';

const inter = Inter({ subsets: ['latin'] }); // Define font settings



export default function Home() {
  const [showQuote, setShowQuote] = useState(true);

  const handleToggle = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div>
      
      <ToggleButton onToggle={handleToggle} />
      {showQuote ? <QuoteComponent /> : <FunFactComponent />}
    </div>
  );
}
