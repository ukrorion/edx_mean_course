var mongoose = require('mongoose');

var articleSchema = {
  title: { type: String, require: true },
  body: { type: String, require: true },
  author: {
    full_name: String,
    photo_url: String,
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  tags: { type: [String], index: true },
  created_at: { type: Date, default: Date.now }
};

module.exports  = new mongoose.Schema(articleSchema);
module.exports.articleSchema  = articleSchema;

