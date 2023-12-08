import express, { request } from "express"

const app = express()

//route handler for the root endpoint/index page/homepage
app.get('/', (req, res) => {
    res.send("<h1><string>hello world</string>, we dem boys</h1>")
    //console.log(requests) //print all server requests
})

//another endpoint for the about page
app.get('/about', (req, res) => {
    res.send("<h2><b>aBOUT mE paGE</b></h2>")
})

//another endpoint for contact page
app.get('/contact', (req, res) => {
    res.send("<h1>COntact page</h1><br><html><body><h2>My sample product page</h2><img src='sample.jpg'alt='sample'></img></body></html>")
    console.log(req)
})

//port numer to listen for incoming HTTP requests
const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})