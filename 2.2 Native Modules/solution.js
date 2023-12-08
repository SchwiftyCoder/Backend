const fs = require("fs")

fs.readFile("messages.txt", "utf8", (error, data) => {
    if(error){
        console.error(error)
        return
    }
    console.log(data) 
})
