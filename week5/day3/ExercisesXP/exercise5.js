
// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file
// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the div and console.log it
    const containerDiv = document.getElementById('container');
    console.log(containerDiv);

// Change the name “Pete” to “Richard”.
const peteElement = document.querySelector('ul.list:first-child li:nth-child(2)');
  peteElement.textContent = 'Richard';
// Delete the second <li> of the second <ul>.
const secondUl = document.querySelector('ul.list:nth-child(2)');
const secondLi = secondUl.querySelector('li:nth-child(2)');
secondLi.remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

const ulLists = document.querySelectorAll('ul.list');
ulLists.forEach(function(ul) {
  const firstLi = ul.querySelector('li:first-child');
  firstLi.textContent = 'Pola'; 
});

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
ulLists.forEach(function(ul) {
    ul.classList.add('student_list');
  });
// Add the classes university and attendance to the first <ul>.
const firstUl = document.querySelector('ul.list:first-child');
firstUl.classList.add('university', 'attendance');

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const danLi = document.querySelector('ul.list:first-child li:last-child');
danLi.style.display = 'none';
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
peteElement.style.border = '1px solid black';
// Change the font size of the whole body.
document.body.style.fontSize = '16px'; // Adjust to desired font size

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (containerDiv.style.backgroundColor === 'lightblue') {
    const users = Array.from(document.querySelectorAll('ul.list li')).map(li => li.textContent);
    alert(`Hello ${users.join(' and ')}`);
  }
});
