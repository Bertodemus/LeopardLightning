const Model = require("../models");
const userController = {
    all (req, res) {
        Model.User.find({})
        .populate("comment")
        .exec((err, user) => res.json(user));
    },
    create(req, res) {
        const reqBody = req.body;
        const newUser = new User(req.Body);
        newUser.save((err, saved) => {
            Model.User.findOne({_id: saved._id})
            Model.User.populate("comment")
            Model.Event.exec((err, user) => res.json(user))
        })
    }
}