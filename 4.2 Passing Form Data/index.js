import express from "express"
import bodyParser from "body-parser"

const port = 3000
const app = express() 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//set the html view templating engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    const name = req.body["firstname"] + req.body["lastname"]
    const nameLength = name.length  
    res.render("index.ejs", {
        charCount: nameLength
    })
})

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})