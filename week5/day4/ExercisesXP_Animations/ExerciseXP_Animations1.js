// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function setTime() {
    setTimeout(function(){
        alert("Hello World");
    }, 2000)
}
setTime()

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addParagraph() {
    setTimeout(function(){
        const container = document.getElementById("container");
        const p = document.createElement("p");
        p.innerHTML = "Hello World";
        container.appendChild(p)
    }, 2000)
}
addParagraph()

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function setIner() {
    
}