// ex 1 Create a TypeScript program that logs the message “Hello, World!” to the console.
console.log("Hello, World!");
// ex 2 Define a variable age of type number and a variable name of type string, and log them to the console.
var age = 23;
var nameExercise2 = "Zvi";
console.log(age, nameExercise2);
// ex 3 Define a variable id that can be either a string or a number.
var id = 18;
// ex 4 Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
var fromNumberToString = function (num) {
    if (num < 0) {
        return "negative";
    }
    if (num == 0) {
        return "zero";
    }
    if (num > 0) {
        return "positive";
    }
};
// console.log(fromNumberToString(-3))
