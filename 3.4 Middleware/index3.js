import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}))


const logger = (req, res, next) => {
  console.log("request method: " + req.method);
  console.log("request url: " + req.url);

  next() // calls the next middleware function in the chain else the request hangs/page loads until timed out
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


