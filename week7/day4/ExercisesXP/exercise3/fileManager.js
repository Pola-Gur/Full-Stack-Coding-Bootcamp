// define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

import fs from "fs";

export function readFile(fileName) {
    try {
        const data = fs.readFileSync(fileName, "utf-8");
        return data;
    } catch (err) {
        console.error("Error reading file")
    }
}

export function writeFile(fileName, newText) {
    try {
        fs.writeFileSync(fileName, newText);
        console.log("Write operation complete.");
    } catch (err) {
        console.error("Error writing file", err);
    }
};
        
