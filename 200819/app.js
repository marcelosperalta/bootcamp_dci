// quote: 📜 When eating an elephant, take one bite at a time 📜

// 🍃MongoDB🍃 with Express

// 🍴😋 to use the "Express" web framework for Node.js
// Express is a routing and middleware web framework that has minimal functionality of its own: 
// An Express application is essentially a series of middleware function calls.
// express
// https://www.npmjs.com/package/express
// npm i express
const express = require("express");
const app = express();

// 🍴😋 to use the "morgan" HTTP request logger middleware for Node.js
// morgan
// https://www.npmjs.com/package/morgan
// npm i morgan
const morgan = require("morgan"); // e.g. on Terminal: PATCH /employees/Marcelo 200 25.234 ms - 169
app.use(morgan("dev"));           // dev = Concise output colored by response status for development use
// app.use https://expressjs.com/en/guide/using-middleware.html#middleware.application

// 🍴😋 to process the JSON data using the Express method "body-parser"
// body-parser
// http://expressjs.com/en/resources/middleware/body-parser.html
// Node.js body parsing middleware.
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// http://expressjs.com/en/api.html#req.body
const bodyParser = require("body-parser");          // https://github.com/expressjs/body-parser
app.use(bodyParser.urlencoded({ extended: true })); // https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
app.use(bodyParser.json());                         // https://github.com/expressjs/body-parser#bodyparserjsonoptions
app.use(bodyParser.raw());                          // https://github.com/expressjs/body-parser#bodyparserrawoptions
// without "morgan":
// bodyParser.urlencoded({ extended: true });
// bodyParser.json();
// bodyParser.raw();
// extra:
// 📒 Anatomy of an HTTP Transaction https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

// 🍴😋 to model MongoDB application data
// elegant mongodb object modeling for node.js
// Mongoose provides a straight-forward, schema-based solution to model your application data. 
// It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
// mongoose
// https://mongoosejs.com/docs/index.html
// npm install mongoose
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

// 🍴😋 
app.use(express.json());

// 🍴😋 setting the *route "/employees"
// *from the point of view of who will consume this route, this is an "endpoint"
// https://smartbear.com/learn/performance-monitoring/api-endpoints/

const employees = require("./router/employees");
app.use("/employees", employees);

// 🍴😋 
module.exports = app;