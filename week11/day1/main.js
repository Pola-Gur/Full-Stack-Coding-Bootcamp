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
function add(a, b) {
    return a + b;
}
// console.log(add('3','7'))
//  ex 6 Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
var getDetails = function (someName, age) {
    var greeting = "Hi, ";
    return [greeting, someName, age];
};
;
function createPerson(inputName, inputAge) {
    var person = {
        firstName: inputName,
        age: inputAge,
    };
    return person;
}
console.log(createPerson("Po", 29));
//  ex 8 Given an HTML element, use a type assertion to cast it to a specific type and access its properties.
var inputElement = document.getElementById("input");
function getAction(userRole) {
    switch (userRole) {
        case "developer":
            return "Go program!";
        case "teacher":
            return "Go teach!";
        case "doctor":
            return "Go heal!";
        case "seller":
            return "Go sell!";
    }
}
console.log(getAction('doctor'));
// ex 10 Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
function greet(namePerson) {
    if (namePerson) {
        return "Hello, " + namePerson + "!";
    }
    return "Hello, anonymous!";
}
console.log(greet("Lol"));
console.log(greet());
