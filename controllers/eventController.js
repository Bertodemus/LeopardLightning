const Model = require("../models");
const express = require("express");
const router = express.Router();

const eventController = {
  findAll: async function(res)  {
    let events = [];
    // router.get("/event", function(req, res) {
    //   response.send('hey you');
    await Model.Event.findAll({}).then(function(event){
       for (var i = 0; i < event.length; i++) {
         events.push(event[i]);
       }
      console.log(event);
    // });
  });
  res.send(events);
  console.log(events);
  console.log("stuff");
  },
  byID (req, res) {
    const id = req.params.id;
  },
  create (req, res) {
    Model.Event.create(req.body).then(function(event) {
      res.json(event);
    });
  },

  remove(req, res) {
    const id = req.params.id;
    Model.Event.findOne({_id: id}).remove((err, removed) => res.json(id))
  },

  update(req, res) {
    const id = req.params.id;
    Model.Event.findOne({_id: id}).update({team_one_votes: req.body.team_one_votes, team_two_votes: req.body.team_two_votes})
    .then(function([ rowsUpdate, [updatedEvent] ]) {
      res.json(updatedEvent)
    })
    .catch(next)
  }
}

module.exports = eventController;