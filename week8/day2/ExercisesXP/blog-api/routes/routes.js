const express = require('express');
const router = express.Router();
const userControler = require("../controllers/controller.js");
const userController = require('../controllers/controller.js');


// register route = register a new user

router.post("/posts", userControler.registerUser)
router.delete("/posts/:id", userControler.loginUser);
router.get("/posts", userController.getAllUsers);
router.get("/posts/:id", userController.getUser);
router.put("/posts/:id", userController.updateUser);

module.exports = router;
