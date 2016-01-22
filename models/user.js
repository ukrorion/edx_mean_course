var mongoose = require('mongoose');
var userSchema = require('../db/schemas/user').userSchema;
var default_role = require('../db/schemas/user').default_role;
var accessible_roles = require('../db/schemas/user').accessible_roles;

userSchema.statics.default_role = function(){
  return default_role;
};

userSchema.path('role').validate(function(value){
  return accessible_roles.indexOf(value) > -1
}, 'Role `{VALUE}` does not exist', 'not_exist');

var User = mongoose.model('User', userSchema);
module.exports = User;
