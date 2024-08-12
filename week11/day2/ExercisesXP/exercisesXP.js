// exercise 1
// Description: Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.
// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.
// In this exercise, a class Person is created with different access modifiers for its properties: private for firstName and lastName,
// public for age, and protected for address. The constructor initializes these properties, and the method getFullName returns the full name of the person.
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person1 = new Person("Pola", "Gur", 29, "Israel");
console.log(person1);
var Sedan = /** @class */ (function () {
    function Sedan(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    Sedan.prototype.start = function () {
        return "The ".concat(this.make, " ").concat(this.model, " is starting.");
    };
    return Sedan;
}());
var car1 = new Sedan('Audi', 'A6', 4);
console.log(car1.make);
console.log(car1.model);
console.log(car1.numberOfDoors);
console.log(car1.start());
// exercise 3
// Description: Create a function that combines two objects using intersection types and returns a new object containing all properties from both objects.
// Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.
// In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types. The function uses the spread operator to combine the properties of the two objects.
// exercise 4
// Description: Create a generic class Stack that represents a stack data structure. The class should support operations like push, pop, and isEmpty.
// Create a generic class Stack<T> that supports the following operations:
// A push method that adds an element of type T to the stack.
// A pop method that removes the top element from the stack and returns it.
// An isEmpty method that checks whether the stack is empty.
// In this exercise, a generic class Stack<T> represents a stack data structure. The class supports operations such as push, pop, and isEmpty. The push method adds an element of type T to the stack, the pop method removes and returns the top element, and the isEmpty method checks if the stack is empty.
// exercise 5
// Description: Create a generic function filterArray that accepts an array and a predicate function, and returns a new array containing elements that satisfy the predicate.
// Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean. The function should return a new array containing elements that satisfy the predicate.
// In this exercise, a generic function filterArray<T> accepts an array of type T and a predicate function (element: T) => boolean. The function returns a new array containing elements that satisfy the predicate function. This approach demonstrates how to use generics with functions to create flexible and reusable code for filtering arrays of various types.
