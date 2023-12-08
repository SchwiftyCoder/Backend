import express from "express";
import morgan from "morgan"; // for logging purposes

const app = express();
const port = 3002;
app.use(morgan("combined")); // mount middleware to log requests => invoke an instance of it

//endpoint for the homepage
app.get("/", (req, res) => {
  res.send("Hello");
  //use the morgan middleware to start logging server activity

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
