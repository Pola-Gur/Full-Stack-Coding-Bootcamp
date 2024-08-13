import { useState } from 'react'
import React, { useRef } from "react";

function CharacterCounter() {
    const inputRef = useRef();
  
    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      // Update the character count based on textLength
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {/* Display character count here */}</p>
      </div>
    );
  }

export default CharacterCounter