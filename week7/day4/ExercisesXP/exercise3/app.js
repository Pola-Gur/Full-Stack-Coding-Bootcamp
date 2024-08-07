// import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.

import { readFile, writeFile } from "./fileManager.js";


const textFromHelloWorld = readFile("Hello World.txt");
console.log(textFromHelloWorld);

writeFile("Bye World.txt", "Writing to the file");