import express from 'express'
const app = express()

/**
 * this is our middleware function 
 * it takes a request, response and an optional next() function
 * next() calls the next middleware function to continue processing the client requests or simply terminates the middleware function calls/sequences and then finally responds to the client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next : a function that when called passes control to the next middleware in the stack. if non exists, the express app hangs
 */ 
var logger = (req, res, next) => {
    console.log('initial middleware to prcess our requests')
    next()
}

var auth = (req, res, next) => {
    console.log("auth middleware called")
    if(req.query.admin === 'true'){
        req.admin = true
        next() //only call the next() middleware in the stack if the user is admin
    } else {
        res.send("No auth") //middleware function calls ends here or hangs. not good. must return a response 
    }
}

/**
 *  gets called first
 *  it immediately executes the logger middleware function
 *  and then
 *  invokes the next() functoin which checks if there are any middleware functions beneath the calling function.
 * if yes, execute them too in the order they are called   else terminate the function sequence calls
 */ 
app.use(logger) 

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send("this is the Home Page")
})

//the auth parameter must return a next() to continue executing the rest of the code on the users page
app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)
    console.log("Users page")
    res.send("this is the users page")
})

app.listen(3002, () => {
    console.log("server up and running on port 3002")
})
