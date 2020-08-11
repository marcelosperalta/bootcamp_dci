const express = require("express");
const router = express.Router();

// root route
router.get("/", (req, res) => {
  res.send("Hey this is Users Page");
});

router.get("/about", (req, res) => {
  res.send("Hey this is about");
});

module.exports = router;