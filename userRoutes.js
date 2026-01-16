const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUser);

router.post("/", userController.createUser);

router.get("/:id", userController.getUsersById);

router.put("/:id", userController.updateUserById);

router.delete("/:id", userController.deleteUserById);

module.exports = router;
