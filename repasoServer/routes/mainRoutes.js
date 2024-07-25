const express = require('express');
const router = express.Router();
const mainController = require("../controller/controller");

router.get("/", mainController.home)

router.get("/users", mainController.getUsers)

router.get("/users/:id", mainController.getUserById)

module.exports = router;