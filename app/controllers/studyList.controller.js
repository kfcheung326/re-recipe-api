const db = require("../models");
const StudyList = db.studyList;

exports.createStudyList = (req, res) => {
    const studyList = new StudyList({
        userId:req.body.userId,
        words:req.body.words
    });

    studyList.save((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
    res.send({ message: "studyList was upload successfully!" });

    });

};

exports.listStudyList = (req, res) => {
  StudyList.find({userId:req.body.userId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving studyList."
      });
    });

};

//update the existing wordslist to db
exports.update =  (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.query.id;
  
    Video.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update comment with id=${id}. Maybe comment was not found!`
          });
        } else res.send({ message: "comment was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating StudyList with id=" + id
        });
      });
};

// delete existing video
exports.delete = (req,res) => {
  const id = req.query.id;

  StudyList.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete wordslist with id= ${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "wordslist was deleted successfully!"
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

