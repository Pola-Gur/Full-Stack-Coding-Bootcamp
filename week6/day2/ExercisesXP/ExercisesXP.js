const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.splice(0, 1);

// Write code to replace “James” to “Jason”.

people[people.indexOf('James')] = "Jason"

// Write code to add your name to the end of the people array.

people.push('Pola')

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

people_copy = people.slice(1, -1)

// Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf('Foo'))

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

last = people[people.length -1]
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let man of people) {
    console.log(man);
    if (man === 'Devon') {
        break;
    }
}

// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ['black', 'red', 'gray', 'lace', 'juniper']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
for (let color in colors) {
    console.log('My №' + (Number(color)+1) + ' choice is ' + colors[color]);
}

// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

number = prompt('Your number')
console.log(typeof(number))

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

while (Number(number) < 10) {
    number = prompt('Your number')
}


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(Number(building.numberOfAptByFloor.firstFloor) + Number(building.numberOfAptByFloor.thirdFloor))

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1] + ', ' + building.numberOfRoomsAndRent.dan[0])
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.

const family = {
    mom: "Lily",
    dad: "James",
    son: "Harry"
}
// Using a for in loop, console.log the keys of the object.
for (let member in family) {
    console.log(member)
}
// Using a for in loop, console.log the values of the object.
for (let member in family) {
    console.log(family[member])
}


// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

for (let detail in details) {
    console.log(detail)
    console.log(details[detail])
}

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”