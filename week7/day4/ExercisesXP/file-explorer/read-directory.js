// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

import fs from 'fs';

fs.readdir('./', (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    console.log('files in this directory: ', files)
});