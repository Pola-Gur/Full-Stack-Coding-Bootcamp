import { useState } from 'react'
import React, { useRef } from "react";
import "./App.css";
import CharacterCounter from './components/CharacterCounter';


function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
