const EmployeesData = require("../model/employeesModel");

// middleware
const getEmployee = async (req, res, next) => {
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
  //res.employee = employee[0];
  res.employee = employee;
  next();
};
const getAdd = async (req, res, next) => {
  let employee;
  try {
    employee = await EmployeesData.find({ add: req.params.add });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
  res.employee = employee;
  next();
};
const getAllEmployee = async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addNewEmployee = async (req, res) => {
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
};
const getOneEmployee = (req, res) => {
  res.status(200).json(res.employee);
};
const updateOneEmployee = async (req, res) => {
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
};
const deleteOneEmployee = async (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  getEmployee,
  getAdd,
  getAllEmployee,
  updateOneEmployee,
  getOneEmployee,
  addNewEmployee,
  deleteOneEmployee,
};