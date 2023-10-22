import React from 'react';
import '../globals.css'; // Use an absolute path


function ToggleButton({ onToggle }) {
  return (
    <button className= "toggle-button" onClick={onToggle}>Switch</button>
  );
}

export default ToggleButton;
