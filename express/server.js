const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(routes(express.Router())); // get all application routes
// app.use(express.static(path.join(__dirname, "../public")));    //Uncomment if you wish to serve static assets from a root level "public" folder

app.listen(port, () => {
  console.log(`Node server started on port : ${port}`);
});
