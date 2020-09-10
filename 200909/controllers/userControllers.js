const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const addUser = async (req, res) => {
  const userCheck = await User.findOne({ userName: req.body.userName });

  if (userCheck) {
    return res.status(400).send("This name is already been used");
  }
  try {
    // const salt = await bcrypt.genSalt(20);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      userName: req.body.userName,
      password: hashedPassword,
    });
    newUser.save();
    res.status(201).send("new user added");
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getAllUsers, addUser, login };
