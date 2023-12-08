import express from "express";
import bodyParser from "body-parser"; 

const app = express();
const port = 3000;
const taskList = []
// let now = new Date()
// let today = new Date();
// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let CurrentDateTime = date+ ' ' + time;

// console.log(CurrentDateTime)

//log input from user and make it available to the response object in the middleware
app.use(bodyParser.urlencoded({ extended: true }));

//middleware call to serve static pages from the public folder
app.use(express.static("public"))

app.get("/", (req, res) => {   
    res.render("index.ejs", {
        "task": taskList, 
     })
})

app.post("/task", (req, res) => {
    console.log(req.body["taskLogger"])
    const task = req.body["taskLogger"]
    // add task only if it contains some content
    if (task){
        taskList.push(task)
    } 
     res.redirect("/")

})
//log

app.listen(port, () => {
    console.log(`server up and running on port ${port}`)
})