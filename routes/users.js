const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.getAllUsers);
router.post("/", userController.postFormSubmitted);

module.exports = router;