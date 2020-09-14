const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authControllers");

// localhost:3000/user/view/Hadi
router.get("/view/:name", allowAccess.allowedToView, userControllers.getOne);
// localhost:3000/user/del/2354676543456
router.get(
  "/del/:id",
  allowAccess.allowedToDelete,
  userControllers.deleteOneById
);

module.exports = router;
