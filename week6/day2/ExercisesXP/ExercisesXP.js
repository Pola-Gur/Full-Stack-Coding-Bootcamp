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
