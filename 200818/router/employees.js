const express = require("express");
const router = express.Router();
const EmployeesData = require("../model/employeesModel");
const { getEmployee } = require("../controllers/employeeController");

// Get all employees
// url http://localhost:3000/employees/
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Add employee
// url http://localhost:3000/employees/
router.post("/", async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name

// Get one employee
// url http://localhost:3000/employees/Ali
// router.get("/:id", getEmployee, (req, res) => {
router.get("/:name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});
// Update one
router.patch("/:name", getEmployee, async (req, res) => {
  //res.send(res.employee.name);
  console.log(req.body);
  if (req.body.name != null) {
    res.employee.name = req.body.name;
  }
  if (req.body.age != null) {
    res.employee.age = req.body.age;
  }
  if (req.body.add != null) {
    res.employee.add = req.body.add;
  }
  try {
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
// Delete
router.delete("/:name", getEmployee, async (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// router.route("/").get(getAllEmployee).post(addNewEmployee);
// router.route("/:name").get(getOneEmployee).patch(updateOneEmployee);

module.exports = router;