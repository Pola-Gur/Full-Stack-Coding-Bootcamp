import './App.css';
import React from 'react';
import Car from './Components/Car';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <Car model={carinfo.model} />
    </div>
  );
}

export default App;


