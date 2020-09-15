const db = require("../models");
const Community = db.community;

exports.uploadComment = (req, res) => {
  const community = new Community({
    user: req.body.user,
    title: req.body.title,
    content: req.body.content
  });

  community.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "community was upload successfully!" });

  });

};

exports.listComment = (req, res) => {
  Community.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving community."
      });
    });

};

exports.removeCommunity = (req, res) => {
  const id = req.body.id;

  Community.findByIdAndDelete(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};



