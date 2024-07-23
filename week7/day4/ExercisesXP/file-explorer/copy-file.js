
import fs from 'fs';

// use the fs module to read the content from a file named source.txt
// and then write the same content to a new file named destination.txt.

fs.readFile("source.txt", "utf-8", (err, data) => {
    if (err){ 
        console.error("Reading error", err);
    }

    console.log("Data from source.txt: ", data)
  
    fs.writeFile("destination.txt", data, (err) => { 
        if (err){ 
            console.error("Writing error", err);
        }
        else{
            console.log('Write operation complete.');
        }
    });
});