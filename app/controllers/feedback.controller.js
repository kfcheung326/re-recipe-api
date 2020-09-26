const db = require("../models");
const Feedback = db.feedback;

exports.uploadFeedback = (req, res) => {
    const feedback = new Feedback({
        feedback:req.body.feedback,
        
    });

    feedback.save((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
    res.send({ message: "feedback was upload successfully!" });

    });

};

exports.listFeedback = (req, res) => {
  Feedback.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving feedback."
      });
    });

};


//update the existing recipe to db
exports.update =  (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.query.id;
  
    Feedback.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update comment with id=${id}. Maybe comment was not found!`
          });
        } else res.send({ message: "comment was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Recipe with id=" + id
        });
      });
};

// delete existing feedback
exports.delete = (req,res) => {
  const id = req.query.id;

  Recipe.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete recipe with id= ${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "recipe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fav with id=" + id
      });
    });
    // res.send("no problem");
};

