var imageSchema = require('../../db/schemas/image');
var mongoose = require('mongoose');
var email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var default_role = 'user';
var accessible_roles = ['admin', 'user', 'author', 'moderator'];

var userSchema = {
  email : { type: String, trim: true, match: email_pattern, required: true, index: { unique: true } },
  password : { type: String, required: true, minlength: 6 },
  first_name : { type: String, trim: true, required: true },
  last_name : { type: String, trim: true, required: true },
  photo : imageSchema,
  articles : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  created_at: { type: Date, default: Date.now() },
  role: {type: String, default: default_role}, 
  token: {type: String}
};

module.exports.userSchema = new mongoose.Schema(userSchema);
module.exports.default_role = default_role;
module.exports.accessible_roles = accessible_roles;
