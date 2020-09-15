const mongoose = require("mongoose");
  var schema = mongoose.Schema({
    user: String,
    title: String,
    content: String
  }, { timestamps: true }
  );

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Community = mongoose.model("Community",schema);

module.exports = Community;
