import express from "express";

const app = express();
const port = 3000;

//give access to styling resources
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index.ejs")
})

//about.ejs page route handler
app.get("/about", (req, res) => {
  res.render("about.ejs")
})

//contact.ejs page route handler
app.get("/contact", (req, res) => {
  res.render("contact.ejs")
}) 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
