const mongoose = require("mongoose");

const Video = mongoose.model(
  "Video",
  new mongoose.Schema({
    name: String,
    link: String
  })
);

module.exports = Video;
