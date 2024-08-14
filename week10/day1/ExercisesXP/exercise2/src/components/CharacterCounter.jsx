import React, { useState, useRef } from "react";

function CharacterCounter() {
    const inputRef = useRef();
    const [count, setCount] = useState(0);

    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      setCount(textLength);
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {count}</p>
      </div>
    );
  }

export default CharacterCounter