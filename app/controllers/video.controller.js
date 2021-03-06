const db = require("../models");
const Video = db.video;

exports.uploadVideo = (req, res) => {
    const video = new Video({
        name:req.body.name,
        link:req.body.link,
        wordList:req.body.wordList
    });

    video.save((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
    res.send({ message: "video was upload successfully!" });

    });

};

exports.listVideo = (req, res) => {
  Video.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving video."
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
          message: "Error updating Recipe with id=" + id
        });
      });
};

// delete existing video
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

