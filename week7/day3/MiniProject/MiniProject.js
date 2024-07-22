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


const findSomeone = document.getElementById("Find");
const insideSection = document.getElementById("inside");

findSomeone.addEventListener("click", randomPerson);


function randomPerson() {
    let num = Math.floor(Math.random() * 83) +1;
    let fullUrl = `https://www.swapi.tech/api/people/${num}`;

    insideSection.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i><p>Loading...</p>';

    fetch(fullUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            const character = data.result.properties;
            const name = character.name;
            const height = character.height;
            const gender = character.gender;
            const birth_year = character.birth_year;
            const homeworldUrl = character.homeworld;

            return fetch(homeworldUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(planetData => {
                const homeworld = planetData.result.properties.name;

                    insideSection.innerHTML = `
                        <p>Name: ${name}</p>
                        <p>Height: ${height}</p>
                        <p>Gender: ${gender}</p>
                        <p>Birth Year: ${birth_year}</p>
                        <p>Homeworld: ${homeworld}</p>
                `;
        });
        })
        .catch(error => {
            insideSection.innerHTML = "<p>Oh no! That person isn't available.<p>";
            console.error('Fetch error:', error);
});
}







// If there is an error getting the data, display a message as follows:


// You can use your own css to style the website as you see fit


// когда загрузилось или ошибка, скрывать секцию загрузки
 // const homeworld = `https://www.swapi.tech/api/planets/${num}`;
