const express = require("express");
const router = express.Router();

// root route
router.get("/", (req, res) => {
  res.send(`
            <style>
                body {
                  background-color: lightblue;
                }
            </style>
            <h1>
              Hey, this is Home
            </h1>`
          );
});

router.get("/about", (req, res) => {
  res.send("Hey, this is About");
});

module.exports = router;