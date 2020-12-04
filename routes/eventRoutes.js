const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController.js");

router.get("/", eventController.all);
router.get("/event/:id", eventController.byID);

router.get("/event/:type/:id", eventController.byTYPE);

router.post("/event", eventController.create);
router.delete("/event/:id", eventController.remove);
router.put("/event/:id", eventController.update);

module.exports = router;
