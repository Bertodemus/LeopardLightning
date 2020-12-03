const Model = require("../models");

const eventController = {
  findAll (req, res) {
    Model.Event.findAll({}).then(function(event){
      const hbsObject = {
        events: event
      };
      console.log(event);
      res.json(event);
      // res.render("index", hbsObject);
    });
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