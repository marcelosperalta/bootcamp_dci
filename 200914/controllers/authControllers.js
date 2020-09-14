const User = require("../models/userModel");

const allowedAccess = {};

allowedAccess.roleCheck = (req, res, next) => {
  if (req.cookies.role !== "ADMIN") {
    return res.status(401).send("NOT Allowed <br> <a href='/'> Home </a> ");
  }
  next();
};
allowedAccess.allowedToDelete = (req, res, next) => {
  const id = req.params.id;
  if (req.cookies.role == "ADMIN" || req.cookies.user_id == id) {
    next();
  } else {
    res.send("NOT Allowed <br> <a href='/'>Home</a>");
  }
};

allowedAccess.allowedToView = async (req, res, next) => {
  const userName = req.params.name;
  const user = await User.findOne({ userName });
  if (req.cookies.role == "ADMIN" || req.cookies.user_id == user._id) {
    next();
  } else {
    res.send("NOT Allowed <br> <a href='/'>Home</a>");
  }
};
module.exports = allowedAccess;
