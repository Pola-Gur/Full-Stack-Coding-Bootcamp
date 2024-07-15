// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

// function makeAllCaps(array) {
//     return new Promise((resolve, reject) => {
//     let uppercase_array = [];
//     array.forEach(element => {
//         if (typeof element === "string") {
//             uppercase_array.push(element.toUpperCase());
//         } else {
//             reject("Array contains non-string elements");
//             return;
//             }
//         });
//         resolve(uppercase_array);
//     });
// };


// function sortWords(uppercase_array) {
//     return new Promise((resolve, reject) => {
//         if (uppercase_array.length > 4) {
//             const array_sorted = uppercase_array.sort();
//             resolve(array_sorted);
//         } else {
//             reject("Array shorter than needs");
//         }
//  });
// }


// Test:

// // in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))









// 2nd Daily Challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

function toJS(morse) {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject("Empty given element");
        } else {
            resolve(morseJS);
        }
    });
}
// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


function toMorse(morseJS) {
    const user_input = prompt("Enter a word or a sentence").toLowerCase();
    return new Promise((resolve, reject) => {
        let translation = [];
        for (let char of user_input) {
            if (morseJS[char]) {
                translation.push(morseJS[char]);
            } else {
                reject("The string contains invalid characters");
                return;
            }
         }
         resolve(translation);
    });  
};  


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function joinWords(translation) {
    const join_string = translation.join("\n");
    const representation = document.createElement("p")
    representation.textContent = join_string;
    document.body.appendChild(representation);
    console.log(representation.innerHTML);
}


toJS(morse)
    .then(morseJS => toMorse(morseJS))
    .then(translation => joinWords(translation))
    .catch(error => console.log(error));


// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---