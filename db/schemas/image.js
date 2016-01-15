var mongoose = require('mongoose');

var imageSchema = {
  name: String,
  content_type: String,
  size: Number,
  path: String
};

module.exports  = new mongoose.Schema(imageSchema);
module.exports.imageSchema  = imageSchema;

