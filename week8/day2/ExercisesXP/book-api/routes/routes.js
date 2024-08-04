const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller.js");


router.post("/", controller.addBook)
router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBook);

module.exports = router;
