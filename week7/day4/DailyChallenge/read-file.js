import fs from "fs";


// require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

export const read_file = () => {
    fs.readFile('./files/file-data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('Content of file-data.txt:', data);
        }
    });
};

