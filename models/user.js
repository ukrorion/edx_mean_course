var mongoose = require('mongoose');
var userSchema = require('../db/schemas/user').userSchema;
var default_role = require('../db/schemas/user').default_role;

userSchema.statics.default_role = function(){
  return default_role;
};

var User = mongoose.model('User', userSchema);
module.exports = User;
