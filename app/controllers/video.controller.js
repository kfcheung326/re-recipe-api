const db = require("../models");
const Video = db.video;

exports.uploadVideo = (req, res) => {
    const video = new Video({
        name:req.body.name,
        link:req.body.link
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



