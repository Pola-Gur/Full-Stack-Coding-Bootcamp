import {people} from "./data.js";

function avgAge() {
    let total = 0
    for (let person of people) {
        total += person.age;
    }
    const average = total / people.length;
    console.log(`Average age: ${average}`);
}
avgAge();
