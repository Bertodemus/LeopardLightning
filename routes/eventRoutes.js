const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const commentController = require("../controllers/commentController";
const userController = require("../controllers/userController")

router.get("/event", eventController.all);
router.get("/event/:id", eventController.byId);
router.post("/event", eventController.create);
router.delete("/event/:id", eventController.remove);

module.exports = router;