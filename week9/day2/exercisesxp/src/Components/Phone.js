import React, { useState } from "react";

const Phone = () => {

    const onePhone = {
        "brand": "Samsung",
        "model": "Galaxy S20",
        "color": "black",
        "year": 2020,
    }
    const [color, setColor] = useState("black")

    const changeColor = () => {
        setColor(prevColor => prevColor === "black" ? "blue" : "black");
    };
    
    return (
        <div>
            <h2>
            My phone is a {onePhone.brand}</h2>
            <br />
            <p>It is a {color} {onePhone.model} from {onePhone.year}</p>
            <button onClick={changeColor}>Change color</button>
        </div>
    );
};

export default Phone;