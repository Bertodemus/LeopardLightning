const Model = require("../models");
const eventController = {
  all (req, res) {
    Model.Event.find({})
      .populate("comment")
      .exec((err, event) => res.json(event))
  },
  byID (req, res) {
    const id = req.params.id;
    Model.Event.findOne({_id: id})
    Model.Event.populate("comment")
    .exec((err, event) => res.json(event));
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