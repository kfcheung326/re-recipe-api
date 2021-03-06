const mongoose = require("mongoose");
  var schema = mongoose.Schema({
    name: String,
    link: String,
    wordList: Array,
    status:Boolean
  }
  );

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Video = mongoose.model("Video",schema);

module.exports = Video;