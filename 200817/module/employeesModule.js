const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  add: String,
  employeeAddedDate: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("employeesData", employeesDataSchema);