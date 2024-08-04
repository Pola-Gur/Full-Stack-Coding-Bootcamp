const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller.js");


router.post("/", controller.addPost)
router.delete("/:id", controller.deletePost);
router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPost);
router.put("/:id", controller.updatePost);

module.exports = router;
