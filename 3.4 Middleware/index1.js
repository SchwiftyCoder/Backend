import express from "express"; 
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

//custome globla variable used to define the root file path of our index
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3006;
// create a body for url encoded requests like from the form submission
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  // sendFile() method is used to render/send an html file when a get request is made to the endpoint "/" by a client  
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body) 
  //we can access any part of the body using .name atrribute as set in the <form></form> of our page
  // like so req.body.attributeName
  //without a response, the client making the req will continue to hang, - page keeps loading until timed out
  res.send("form data received and processed")
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
