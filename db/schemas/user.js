var imageSchema = require('../../db/schemas/image');
var mongoose = require('mongoose');
var email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var userSchema = {
  email : { type: String, trim: true, match: email_pattern, required: true, index: { unique: true } },
  password : { type: String, required: true, minlength: 6 },
  first_name : { type: String, trim: true, required: true },
  last_name : { type: String, trim: true, required: true },
  photo : imageSchema,
  articles : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  created_at: { type: Date, default: Date.now() }
};

module.exports  = new mongoose.Schema(userSchema);
module.exports.userSchema  = userSchema;
