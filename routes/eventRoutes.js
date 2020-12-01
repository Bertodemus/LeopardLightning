const express = require("express");
const eventRouter = express.Router();
const eventController = require("../controllers/eventController");

eventRouter.get("/event", eventController.all);
eventRouter.get("/event/:id", eventController.byId);
eventRouter.post("/event", eventController.create);
eventRouter.delete("/event/:id", eventController.remove);

module.exports = eventRouter;