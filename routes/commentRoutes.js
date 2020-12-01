const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/commentController");

commentRouter.get("/comment", commentController.all);
commentRouter.get("/comment/:id", commentController.byId);
commentRouter.post("/comment", commentController.create)

module.exports = commentRouter;