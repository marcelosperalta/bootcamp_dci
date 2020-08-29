// quote: 📜 When eating an elephant, take one bite at a time 📜

// hints:
// 1. to understand some parts, you can try to remove it and see what is the impact on the application;
// 2. remember to use the "console.log" when you need to see what happens in some part;
// 3. if is too hard to understand some point, see the documentation.


// 🍃MongoDB🍃 with Express


// 🍴😋 to use the "Express" web framework for Node.js
// #framework #middleware
// Express is a routing and middleware web framework that has minimal functionality of its own: 
// An Express application is essentially a series of middleware function calls.
// express
// https://www.npmjs.com/package/express
// npm i express
const express = require("express");


// 🍴😋 to use the class "express.Router" to create modular, mountable route handlers
// #framework #middleware #routing
// express.Router
// http://expressjs.com/en/guide/routing.html#express-router
const router = express.Router();


// 🍴😋 to import the "employeesModel.js" that have the MongoDB schema
// #mongodb #mongoose
// A document schema is a JSON object that allows you to define the shape 
// and content of documents and embedded documents in a collection.
// https://docs.mongodb.com/realm/mongodb/document-schemas/
const EmployeesData = require("../model/employeesModel");


const {
  getEmployee,
  getAdd,
  getAllEmployee,
  addNewEmployee,
  getOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
} = require("../controllers/employeeController");

// GET    -> http://localhost:3000/employees/      -> get all employees
// POST   -> http://localhost:3000/employees/      -> add employee
// GET    -> http://localhost:3000/employees/:name -> get employee by name
// PATCH  -> http://localhost:3000/employees/:name -> update employee by name
// PUT    -> http://localhost:3000/employees/:name -> update employee by name
// DELETE -> http://localhost:3000/employees/:name -> delete employee by name

router.route("/").get(getAllEmployee).post(addNewEmployee);

router
  .route("/:name")
  .get(getEmployee, getOneEmployee)
  .patch(getEmployee, updateOneEmployee)
  .delete(getEmployee, deleteOneEmployee);

// get by address
router.get("/search/:add", getAdd, (req, res) => {
  res.status(200).json(res.employee);
});

module.exports = router;