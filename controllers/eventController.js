const Model = require("../models");

const eventController = {
  all: async function(req, res) {
    await Model.Event.findAll({}).then(dbevent => {
      // console.log(dbevent);
      res.render("index", { layout: "main.handlebars", dbevent: dbevent });
    });
  },


  byID: async function(req, res) {
    let id = req.params.id;
    id = id + " Event";
    console.log(id);
    await Model.Event.findAll({ where: {category: id} }).then(dbevent => {
      console.log(dbevent);
      res.render(id.split(' ').join('_'), { layout: "main.handlebars", dbevent: dbevent });
    });
    // Model.Event.populate("comment").exec((err, event) => res.json(event));
  },

  byTYPE: async function(req, res) {
    let id = req.params.id;
    let type = req.params.type;
    // id = id + " Event";
    console.log(id);
    await Model.Event.findOne({ where: {id: id} }).then(dbevent => {
      console.log(dbevent);
      res.render(type, { layout: "main.handlebars", dbevent: dbevent });
    });
    // Model.Event.populate("comment").exec((err, event) => res.json(event));
  },

  // byID(req, res) {
  //   const id = req.params.id;
  //   Model.Event.findOne({ _id: id });
  //   Model.Event.populate("comment").exec((err, event) => res.json(event));
  // },


  create(req, res) {
    Model.Event.create(req.body).then(event => {
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
