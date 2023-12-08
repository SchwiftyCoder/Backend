// import statements
import express from "express";
import bodyParser from "body-parser";

//needed to create a directory path
import {dirname } from "path"
import { fileURLToPath } from "url";

//variable declarations
var isAuthenticated = false
const port = 3000
const app = express();

//stores directory path from source to the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

//parse input from html forms
app.use(bodyParser.urlencoded({extended: true}))

//middleware to authenticate user login
const userAuth = (req, res, next) => {
    const password = req.body.password
    if(password == "hola"){
        isAuthenticated = true
    }
    next()
} 
// return the homepage when a client request is made to 127.0.0.1:port
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

//authenticate user info before sending a response
app.use(userAuth)

//another route handler for the /check endpoint on a post request
app.post('/check', (req, res) => {
    console.log(isAuthenticated)
    console.log(req.body.password)
    if(isAuthenticated){ 
        res.sendFile(__dirname + '/public/secret.html')
    } else{
        //res.sendFile(__dirname + '/public/index.html')
        res.redirect('/')
    }
    
})

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})