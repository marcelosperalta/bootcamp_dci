const express = require("express");
const router = express.Router();
const EmployeesData = require("../module/employeesModule");

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

// GET    http://localhost:3000/employees/      --> get all employees
// POST   http://localhost:3000/employees/      --> add employee
// GET    http://localhost:3000/employees/:name --> get employee by name
// PATCH  http://localhost:3000/employees/:name --> update employee by name
// PUT    http://localhost:3000/employees/:name --> update employee by name
// DELETE http://localhost:3000/employees/:name --> delete employee by name

// middleware
async function getEmployee(req, res, next) {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
  console.log(employee);
  // res.employee = employee[0];
  res.employee = employee;
  next();
}

// Get one employee
// url http://localhost:3000/employees/Ali
// router.get("/:id", getEmployee, (req, res) => {
router.get("/:name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});

// Update one
router.patch("/:name", getEmployee, (req, res) => {});

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

module.exports = router;