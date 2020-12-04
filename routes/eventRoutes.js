const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController.js");

<<<<<<< HEAD
router.get("/event", eventController.findAll);
=======
router.get("/", eventController.all);
>>>>>>> 673340b8c7ae926868e3435d10b1180b6aee89a8
router.get("/event/:id", eventController.byID);

router.get("/event/:type/:id", eventController.byTYPE);

router.post("/event", eventController.create);
router.delete("/event/:id", eventController.remove);
router.put("/event/:id", eventController.update);

module.exports = router;
