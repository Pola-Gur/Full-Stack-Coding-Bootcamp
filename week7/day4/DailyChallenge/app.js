import {greet} from "./greeting.js";
import { colorfulText } from "./colorful-message.js";
import { read_file } from "./read-file.js";

console.log(greet("Pola"));
colorfulText("This is a colorful message!");

try {
    let data = await read_file("/files/file-data.txt")
    colorfulText(data);
} catch (error) {
    console.log("Error reading file:", error.message);
}



// require the greeting.js module and use the greet function to greet a user.

// require the colorful-message.js module and call the function you’ve written to display the colorful message.

