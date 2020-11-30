const Model = require("../models");
const eventController = {
  all (req, res) {
    Model.Event.find({})
      .populate("comment")
      .exec(((err, event) => res.json(event))
  },
  byID (req, res) {
    const id = req.params.id;
    Model.Event.findOne({_id: id})
    Model.Event.populate("comment")
    .exec((err, event) => res.json(event));
  },
  create (req, res) {
    const reqBody = req.body;
    const newEvent = new Event(reqBody);
    newEvent.save((err, saved) => {
      Model.Event.findOne({_id: saved._id})
      Model.Event.populate("comment")
      Model.Event.exec((err, event) => res.json(event))
    })
  },

  remove(req, res) {
    const id = req.params.id
    Model.Event.findOne({_id: id}).remove((err, removed) => res.json(id))
  }
}

module.exports = eventController;