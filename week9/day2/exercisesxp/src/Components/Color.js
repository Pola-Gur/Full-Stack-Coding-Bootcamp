import React, { useState, useEffect } from 'react';

const FavoriteColor = () => {
    const [favoriteColor, setColor] = useState('red');

    useEffect (() => {
        alert("useEffect reached");
        setColor('yellow');
    }, []);

    const changeColorToBlue = () => {
        setColor('blue');
    };

    return (
        <header>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColorToBlue}>Change Color</button>
        </header>
    );
}


export default FavoriteColor;