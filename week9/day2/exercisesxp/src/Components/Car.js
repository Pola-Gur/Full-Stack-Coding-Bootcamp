// In the Car.js component render a header with the carInfo model, for example This car is <model>.
// Import the Car.js component to the App.js.

import React from "react";


const Car = ({ model }) => {

    return (
        <header>
            This car is {model}
        </header>
    )
}

export default Car 