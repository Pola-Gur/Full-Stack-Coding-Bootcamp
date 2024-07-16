// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector("h1")
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector("article")
const articleLastChild = article.querySelector('p:last-child')

articleLastChild.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.querySelector("h2")

function changeColorToRed() {
    h2.style.backgroundColor = "red";
}

h2.addEventListener("click", changeColorToRed)

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector("h3")

function hideH3() {
    h3.style.display = "none";
}

h3.addEventListener("click", hideH3)

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const btn = document.querySelector("button")

function everythingBold() {
    const paragraphs = article.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = "bold";
    });
}

btn.addEventListener("click", everythingBold)

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

function randomPX() {
    console.log(h1.style.fontSize)
    h1.style.fontSize = Math.floor(0 + Math.random() * 100) + "px"
    console.log(h1.style.fontSize)
}

h1.addEventListener("mouseover", randomPX)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const p2 = article.getElementsByTagName('p')[1]

function fadeout() {
    let opacity = 1;
    const timer = setInterval(() => {
    if (opacity <= 0.1) {
        clearInterval(timer);
        p2.style.display = 'none';
    }
    p2.style.opacity = opacity;
    p2.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    opacity -= opacity * 0.1;
    }, 50);
}
p2.addEventListener("mouseover", fadeout)

// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// Retrieve the form and console.log it.
const form = document.getElementsByTagName("form")[0];
console.log(form)

// Retrieve the inputs by their id and console.log them.

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
console.log(fname);
console.log(lname);

// Retrieve the inputs by their name attribute and console.log them.
const firstname = document.getElementsByName("firstname")[0];
const lastname = document.getElementsByName("lastname")[0];
console.log(firstname);
console.log(lastname);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

// const usersAnswer = document.getElementsByName("usersAnswer")
// const submit = document.getElementsByName("Submit");

// function firstnameLength() {
//     return firstname.values.length;
// }

// function lastnameLength() {
//     return lastname.values.length;
// }

// function addOnPage() {
//     const liFirst = document.createElement("li");
//     liFirst.appendChild(document.createTextNode(firstname));
//     usersAnswer.appendChild(liFirst);
//     const liLast = document.createElement("li");
//     liLast.appendChild(document.createTextNode(lastname));
//     usersAnswer.appendChild(liLast);
// }

// function addListClick() {
//     if (firstnameLength() > 0 && lastnameLength() > 0) {
//         addOnPage()
//     }

// }
// function addListKeyPress() {
//     if (firstnameLength() > 0 && lastnameLength() > 0 && event.keyCode === 13) {
//         addOnPage()
//     }
// }

// submit.addEventListener("click", addListClick);
// lastname.addEventListener("keypress", addListKeyPress)

// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:
// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 
