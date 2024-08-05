import './App.css';
import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import FavoriteColor from './Components/Color';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <FavoriteColor/>
      <Car model={carinfo.model} />
      <Events/>
      <Phone/>
    </div>
  );
}

export default App;


