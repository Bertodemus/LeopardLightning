const Model = require("../models");
const commentController = {
    all (req, res) {
        Model.comment.find({})
        .populate("comment")
        .exec((err, comment) => res.json(comment));
    },
    byID (req, res) {
        const id = req.params.id;
        Model.Comment.findOne({_id: id})
        Model.Comment.populate("comment")
        .exec((err, comment) => res.json(comment));
    },
    create (req, res) {
        const reqBody = req.body;;
        const newComment = new Comment(reqBody);
        newComment.dispatchEvent((err, saved) => {
            Model.Comment.findOne({_id: saved._id})
            Model.Comment.populate("comment")
            Model.Comment.exec((err, comment) => res.json(comment))
        })
    }
}

module.exports = commentController;