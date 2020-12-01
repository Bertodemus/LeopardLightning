const express = require("express");
const router = express.Router();
const eventController = require("../controllers/Controller");

router.get("/event", eventController.all);
router.get("/event/:id", eventController.byID);
router.post("/event", eventController.create);
router.delete("/event/:id", eventController.remove);
router.put("/event/:id", eventController.update);

module.exports = router;