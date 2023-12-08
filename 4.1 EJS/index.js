import express from "express"

const app = express()
const port = 3000

//route handler for homepage
app.get("/", (req, res) => {
    const data = {
        title: "EJS",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>"
    }
    res.render("index.ejs", data)
})

app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
})