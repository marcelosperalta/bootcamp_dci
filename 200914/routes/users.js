const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authControllers");

router.get("/", allowAccess.roleCheck, userControllers.getAllUsers);

module.exports = router;
