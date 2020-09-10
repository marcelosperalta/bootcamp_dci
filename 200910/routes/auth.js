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
  }

  res.redirect("/");
});
module.exports = router;
