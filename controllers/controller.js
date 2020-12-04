const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/event", function(req, res) {
    db.Event.findAll({}).then(function(event){
        res.json(event);
    });
});