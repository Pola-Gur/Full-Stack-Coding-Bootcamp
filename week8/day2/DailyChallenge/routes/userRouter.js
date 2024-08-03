const express = require('express');
const router = express.Router();
const userControler = require("../controllers/userController.js");
const userController = require('../controllers/userController.js');


// register route = register a new user

router.post("/register", userControler.registerUser)
router.post("/login", userControler.loginUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.put("/users/:id", userController.updateUser);

module.exports = router;
