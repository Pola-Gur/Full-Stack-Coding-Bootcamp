import './App.css';
import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <Car model={carinfo.model} />
      <Events/>
    </div>
  );
}

export default App;


