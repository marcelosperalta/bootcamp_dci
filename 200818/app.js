const express = require("express");
const app = express();
const morgan = require("morgan"); // e.g. on Terminal: PATCH /employees/Marcelo 200 25.234 ms - 169
app.use(morgan("dev"));

// To process the JSON data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// MongoDB
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
const employees = require("./router/employees");
app.use("/employees", employees);

module.exports = app;