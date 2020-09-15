const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .gif .png files are OK"), false);
    }
  },
});
router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/register", upload.single("avatar"), userControllers.addUser);
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
