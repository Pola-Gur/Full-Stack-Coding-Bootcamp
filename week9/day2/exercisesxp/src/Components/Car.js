// In the Car.js component render a header with the carInfo model, for example This car is <model>.
// Import the Car.js component to the App.js.

import React, { useState } from 'react';
import Garage from './Garage'; 

const Car = ({ model }) => {
  const [color, setColor] = useState('red');

  return (
    <header>
      This car is {color} {model}
      <Garage size="small" /> 
    </header>
  );
};

export default Car;