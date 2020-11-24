/* eslint-disable camelcase */
const comment = require("../models").Comment;
const event = require("../models").Event;
const index = require("../models").Index;
const user = require("../models").User;

module.exports = {
  userCreate(req, res) {
    return User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  userFind(req, res) {
    return User.findall({})
  },
  eventCreate(req, res) {
    return Event.create({
      title: req.body.eventTitle,
      category: req.body.eventCategory,
      description: req.body.eventDescription,
      team_one_name: req.body.teamOneName,
      team_one_win: req.body.teamOneWins,
      team_one_loss: req.body.teamOneLoss,
      team_one_genre: req.body.teamOneGenre,
      team_one_votes: req.body.teamOneVotes,
      team_two_name: req.body.teamTwoName,
      team_two_loss: req.body.teamTwoLoss,
      team_two_genre: req.body.teamTwoGenre,
      team_two_votes: req.body.teamTwoVotes
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  eventFind(req, res) {
    return Event.findall({})
  },
  commentCreate(req, res) {
    return Comment.create({
      text: req.body.commentText
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  findComment(req, res) {
    return Comment.findall({})
  }
};

//Not 100% where to go from here, added controller to create events, users and comments. feel free to adjust to fit other needs //DS-11/24
