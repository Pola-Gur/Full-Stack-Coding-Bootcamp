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
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any 
{
    return a + b;
}

// console.log(add('3','7'))

//  ex 6 Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.

const getDetails = (someName: string, age: number): [string, string, number] => {
    const greeting = "Hi, " 
    return [greeting, someName, age]
}
// console.log(getDetails("Po", 29))


// ex 7 Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.


interface Person {
  firstName: string,
  age: number,
};

function createPerson(inputName: string, inputAge: number): Person {
    let person: Person = {
    firstName: inputName,
    age: inputAge,
    }
    return person
}

console.log(createPerson("Po", 29));

//  ex 8 Given an HTML element, use a type assertion to cast it to a specific type and access its properties.

const inputElement = document.getElementById("input") as HTMLInputElement;

// ex 9 Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

type UserRole = "developer" | "teacher" | "doctor" | "seller"
function getAction(userRole: UserRole): string {
    switch(userRole) {
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

console.log(getAction('doctor'))

// ex 10 Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greet(namePerson: string): string {
    if (namePerson) {
        return "Hello, " + namePerson + "!"
    }
    return "Hello, anonymous!"
}


console.log(greet("Lol"));
console.log(greet());
