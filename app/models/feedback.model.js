const mongoose = require("mongoose");
  var schema = mongoose.Schema({
    feedback: String,
    status:Boolean,
    timestamp: { type: Date, default: Date.now}
  }, 
  );

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Feedback = mongoose.model("Feedback",schema);

module.exports = Feedback;