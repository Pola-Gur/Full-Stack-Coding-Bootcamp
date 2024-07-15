// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?


const planets = [
    { name: 'Mercury', color: 'grey', moons: [] },
    { name: 'Venus', color: 'yellow', moons: [] },
    { name: 'Earth', color: 'blue', moons: ['Moon'] },
    { name: 'Mars', color: 'red', moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', color: 'orange', moons: ['Io', 'Europa', 'Ganymede', 'Callisto'] },
    { name: 'Saturn', color: 'goldenrod', moons: ['Titan', 'Enceladus', 'Rhea'] },
    { name: 'Uranus', color: 'lightblue', moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'] },
    { name: 'Neptune', color: 'darkblue', moons: ['Triton', 'Proteus', 'Nereid'] }
];

function SolarSystem() {
    const section = document.querySelector('.listPlanets');

    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;

        section.appendChild(planetDiv);

        planet.moons.forEach((moon, index) => {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');

            moonDiv.style.top = `${index * 40}px`;
            moonDiv.style.left = `${index * 40}px`;

            planetDiv.appendChild(moonDiv);
        });
    });
}

SolarSystem();