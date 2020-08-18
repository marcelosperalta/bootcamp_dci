// quote: 📜 When eating an elephant, take one bite at a time 📜

// 🍃MongoDB🍃 with Express

// 🍴😋 to use the Express web framework for Node.js
// express
// https://www.npmjs.com/package/express
// npm i express
const express = require("express");
const app = express();

// 🍴😋 to use the morgan HTTP request logger middleware for Node.js
// morgan
// https://www.npmjs.com/package/morgan
// npm i morgan
const morgan = require("morgan"); // e.g. on Terminal: PATCH /employees/Marcelo 200 25.234 ms - 169
app.use(morgan("dev"));           // dev = Concise output colored by response status for development use

// 🍴😋 to process the JSON data
// body-parser
// http://expressjs.com/en/resources/middleware/body-parser.html
// Node.js body parsing middleware.
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// http://expressjs.com/en/api.html#req.body
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true }); // 
bodyParser.json();
bodyParser.raw();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

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