// ex 1 Create a TypeScript program that logs the message “Hello, World!” to the console.
console.log("Hello, World!")

// ex 2 Define a variable age of type number and a variable name of type string, and log them to the console.
let age: number = 23;
let nameExercise2: string = "Zvi";
console.log(age, nameExercise2)

// ex 3 Define a variable id that can be either a string or a number.
let id: string | number = 18;

// ex 4 Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.

const fromNumberToString = (num: number): string => {
    if (num < 0) {
        return "negative"
    }
    if (num == 0) {
        return "zero"
    }
    if (num > 0) {
        return "positive"
    }
}

// console.log(fromNumberToString(-3))


// ex 5 Create a function called add that can add two numbers together or concatenate two strings.
const add = (a: string | number, b:  string | number):  string | number => {
    return a + b;
}

// console.log(add('3','7'))