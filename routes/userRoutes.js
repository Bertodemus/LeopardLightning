const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController")

userRouter.get("/user", userController.all);
userRouter.post("/user", userController.create);