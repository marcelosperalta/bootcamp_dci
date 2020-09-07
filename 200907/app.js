const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
app.use(express.json());
const bookControllers = require("./controllers/bookControllers");

app.get("/", bookControllers.getAll).post("/", bookControllers.addOne);
app
  .get("/:id", bookControllers.getOneByID)
  .delete("/:id", bookControllers.deleteOneByID);
module.exports = app;