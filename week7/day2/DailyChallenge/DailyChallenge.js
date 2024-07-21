// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Form');
    const container = document.getElementById('container');
    const deleteAll = document.getElementById('deleteAll');
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; 

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector("input");
        const category = input.value;
        const fullUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;


    fetch(fullUrl)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;  
            const gifElem = document.createElement("div");
            const imgElem = document.createElement("img");
            imgElem.src = gifUrl; 
            gifElem.appendChild(imgElem); 
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                gifElem.remove();
            });
            gifElem.appendChild(deleteButton);
            container.appendChild(gifElem);
        })
        .catch(error => console.error('Error >>', error)); 
        });

    deleteAll.addEventListener('click', () => {
    container.innerHTML = '';
    });
});