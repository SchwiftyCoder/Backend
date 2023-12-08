const { error } = require("console");
const fs = require("fs");

fs.writeFile("messages.txt", "Hello from NodeJS!\n", (err) => {
    if(err) {
        throw err
    } else{
        console.log("The file has been saved!")
    }
});


