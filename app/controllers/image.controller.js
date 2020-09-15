const db = require("../models");
const fs = require("fs");
const Image = db.image;

exports.uploadImage = (req, res) => {
  const target = fs.readFileSync(req.body.img);
  const image = new Image({
    img: {
      data: target,
      contentType: 'image/png'
    }
  });

  image.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "image was upload successfully!" });

  });

};

exports.listImage = (req, res) => {
  Image.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comimagemunity."
      });
    });

};





