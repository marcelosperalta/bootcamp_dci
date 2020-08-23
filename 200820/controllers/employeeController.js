const EmployeesData = require("../model/employeesModel");
const e = require("express");


// Middleware
const getEmployee = async (req, res, next) => {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      // 404 Not Found
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({
      message: err.message,
    });
  }
  console.log(employee);
  //res.employee = employee[0];
  res.employee = employee;
  next();
};

// Get Address
const getAdd = async (req, res, next) => {
  let employee;
  try {
    // find will get all or with criteria wil get some
    // with limit you can define how many should find get you
    // employee = await EmployeesData.find({ add: req.params.add }).limit(70);
    employee = await EmployeesData.find({ add: req.params.add });
    if (employee == null)
      // 404 Not Found
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({
      message: err.message,
    });
  }
  res.employee = employee;
  next();
};


// View all Employees
const getAllEmployee = async (req, res) => {
  try {
    // const employees = await EmployeesData.find().select("name age");
    const employees = await EmployeesData.find();
    // 200 for Successful Ok
    // console.log(employees);
    res.status(200).json(
      employees.map((employee) => {
        return {
          employeeId: employee._id,
          employeeName: employee.name,
          age: employee.age,
          employeeAddedDate: employee.employeeAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:3000/employees/${employee.name}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};


// Add new Employee
const addNewEmployee = async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    // save
    const newEmployee = await employee.save();
    // 201 for Successful Created
    res.status(201).json(newEmployee);
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({
      message: err.message,
    });
  }
};


// Get one Employee upon criteria
const getOneEmployee = (req, res) => {
  // 200 for Successful OK
  res.status(200).json(res.employee);
};


// Update one Employee upon criteria
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
    // save
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({
      message: err.message,
    });
  }
};


// Update one Employee upon criteria
const deleteOneEmployee = async (req, res) => {
  try {
    // remove
    await res.employee.remove();
    // 200 for Successful OK
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    // 400 for Internal server error
    res.status(500).json({
      message: err.message,
    });
  }
};


// Update All Employee data upon criteria
const updateAllEmployeeData = async (req, res) => {
  try {
    // update
    await EmployeesData.updateOne(
      { name: req.params.name },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          add: req.body.add,
        },
        $currentDate: {
          employeeAddedDate: Date.now,
        },
      }
    );
    // 200 for Successful OK
    res.status(200).json({ message: "Employee Updated" });
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({ message: err.message });
  }
};


// Update All Employees upon criteria
const updateManyEmployees = async (req, res) => {
  try {
    // update many
    await EmployeesData.updateMany(
      { add: req.params.add },
      {
        $set: {
          add: req.body.add,
        },
      }
    );
    // 200 for Successful OK
    res.status(200).json({ message: "Add got update" });
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({ message: err.message });
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
  updateAllEmployeeData,
  updateManyEmployees,
};