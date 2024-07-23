import fs from "fs/promises";

export const read_file = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return data;
    } catch (error) {
        throw new Error(error.message);
    } 
};


// require the fs module and read the content from the file-data.txt file. Display the content in the terminal.