// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function removeSpaces(str) {
    return str.split(' ').join('');
}

function anagram(string1, string2) {

    let string1New = removeSpaces(string1.trim()).toLowerCase();
    let sorted1 = string1New.split('').sort().join('');


    let string2New = removeSpaces(string2.trim()).toLowerCase();
    let sorted2 = string2New.split('').sort().join('');

    return sorted1 === sorted2;
}

console.log(anagram("Astronomer", "Moon starer"));
console.log(anagram("School master", "The classroom")); 
console.log(anagram("The Morse Code", "Here come dots"));