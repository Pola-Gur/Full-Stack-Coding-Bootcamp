// 🌟 Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file
// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const divNavbar = document.getElementById('navBar');

divNavbar.setAttribute("id", 'socialNetworkNavigation')

// We are going to add a new <li> to the <ul>.

const ul = document.querySelector("ul")
// First, create a new <li> tag (use the createElement method).

const new_li = document.createElement('li');

// Create a new text node with “Logout” as its specified text.

const logout = document.createTextNode("Logout")

// Append the text node to the newly created list node (<li>).

new_li.appendChild(logout)

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

ul.appendChild(new_li)

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
// Display the text of each link. (Hint: use the textContent property).

let firstChild = ul.firstElementChild.textContent;
let lastChild = ul.lastElementChild.textContent;

console.log("First child:", firstChild);
console.log("Last child:", lastChild);