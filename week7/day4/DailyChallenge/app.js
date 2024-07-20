import {great} from "./greeting.js";
import {
    displayColorMessage,
    displayErrorMessahe,
} from "./colorful-message.js";
import { read_file } from "./read-file.js";

console.log(displayColorMessage(greet("Pola")));
console.log(displayErrorMessahe(greet("Lola")));

try {
    let data = await read_file("./file-data.txt")
    console.log(displayColorMessage(data));
} catch (error) {
    console.log(displayErrorMessahe(error.message));
}