// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css


let num = Math.floor(Math.random() * 83) +1;

fetch(url)
url = `https://www.swapi.tech/people/${num}`

name
height
gender
birth_year
homeworld
`https://www.swapi.tech/api/planets/${num}`



// If there is an error getting the data, display a message as follows:

"Oh no! That person isn't available."
// You can use your own css to style the website as you see fit
