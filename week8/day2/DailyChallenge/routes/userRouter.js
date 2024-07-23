const express = require('express');
const router = express.Router();
const userControler = require("../controllers/usersController.js");


// register route = register a new user

router.post("/register", userControler.registerUser)

module.exports = router;
