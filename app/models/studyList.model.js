const mongoose = require("mongoose");
  var schema = mongoose.Schema({
    userId: String,
    words: Array
  }
  );

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const StudyList = mongoose.model("StudyList",schema);

module.exports = StudyList;
