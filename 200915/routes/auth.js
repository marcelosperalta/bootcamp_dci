const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/register", userControllers.addUser);
router.get("/login", (req, res) => {
  // This if statement can be done in middleware to check if the user logged in or not
  if (req.cookies.session_id) {
    res.send("You are already lodged in <br> <a href='/logout'>logout</a>");
  }
  res.render("login", {
    title: "Login",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/login", userControllers.login);
router.get("/logout", (req, res) => {
  if (req.cookies && req.cookies.session_id) {
    res.clearCookie("session_id");
    res.clearCookie("role");
    res.clearCookie("user_id");
  }

  res.redirect("/");
});
module.exports = router;
