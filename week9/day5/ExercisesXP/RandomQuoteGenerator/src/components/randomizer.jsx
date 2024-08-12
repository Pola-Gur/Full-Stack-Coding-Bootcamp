import React, { useState } from 'react';
import quotesJSON from "../../data/QuotesDatabase";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const Randomizer = () => {

    function randomQuote(excludeQuote) {
        let newQuote;
        do {
            newQuote = quotesJSON[Math.floor(Math.random() * quotesJSON.length)];
        } while (newQuote === excludeQuote);  
        return newQuote;
    }

    const [quote, setQuote] = useState(() => randomQuote(null));
    const [bgColor, setBgColor] = useState("#FFFFFF");
    
    function handleClick() {
        setQuote(randomQuote(quote));
        setBgColor(getRandomColor());
    }

    return (
        <div id="quoteDiv" style={{ backgroundColor: bgColor, border: '1px solid black', padding: '20px' }}>
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
            <button onClick={handleClick} style={{ backgroundColor: getRandomColor(), color: '#FFF' }}>New quote</button>
        </div>
    );
}

export default Randomizer;


// "quote"
// 	"author"