// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types
// (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.


function storeUserInput(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value;
    const adj = document.getElementById("adjective").value;
    const smnName = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (!noun || !adj || !smnName || !verb || !place) {
        alert("Please fill in all fields.");
        return;
    }

    let story = `${smnName} went to the ${place} to ${verb} with a ${adj} ${noun}.`;
    const placeForStory = document.getElementById("story");
    placeForStory.innerHTML = story;
}


document.getElementById("lib-button").addEventListener('click', storeUserInput);

// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed
// (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.