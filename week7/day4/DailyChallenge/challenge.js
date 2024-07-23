// require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

import {greet} from "./greeting.js";
import { colorfulText } from "./colorful-message.js";
import { read_file } from "./read-file.js";

console.log(greet("John"));

colorfulText("It is a colorfull message??");

read_file();