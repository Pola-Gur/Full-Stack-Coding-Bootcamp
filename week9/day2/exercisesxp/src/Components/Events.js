import React, { useState } from "react";

const Events = () => {

    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickMe = () => {
        alert("I was clicked");
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The ENTER key was pressed, your input is: ${event.target.value}`);
        }
    };


    const handleToggleClick = () => {
        setIsToggleOn(prevState => !prevState);
    };

    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <br />
            <input 
                type="text" 
                onKeyDown={handleKeyDown} 
                placeholder="Press the ENTER key!" 
            />
            <br />
            <button onClick={handleToggleClick}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
            
        </>
    );
};
export default Events