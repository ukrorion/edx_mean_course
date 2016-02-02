var mongoose = require('mongoose');
var userSchema = require('../db/schemas/user').userSchema;
var default_role = require('../db/schemas/user').default_role;
var accessible_roles = require('../db/schemas/user').accessible_roles;
var bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
var fs = require('fs');
var SALT_WORK_FACTOR = 10;

userSchema.path('role').validate(function(value){
  return accessible_roles.indexOf(value) > -1
}, 'Role `{VALUE}` does not exist', 'not_exist');

userSchema.pre('save', function(next){
  var user = this;
  if(!user.isModified('password'))
    next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) next(err)
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err) next(err);
      user.password = hash;
      next();
    })
  });
});

userSchema.pre('save', function(next){
  var user = this;
  if(!user.isNew) next();
  fs.readFile('test-user-cert.pem', function(err, cert) {
    if(err) throw err;
    var token = jwt.sign({password: user.password, email: user.email}, cert);
    if(!token)
      throw new Error('Token was not generated');
    user.token = token;
    next();
  });
});

userSchema.statics.default_role = function(){
  return default_role;
};

userSchema.statics.check_credential = function(credential, callback){
  this.findOne({'email': credential.email}, function(err, user){
    if(err) return callback(err, null);
    if(user == null) return callback(new Error('not_found'), null);
    bcrypt.compare(credential.password, user.password, function(err,res){
      if(err) return callback(err, null);
      if(res) {
        user.password = undefined;
        callback(null, user);
      } else {
        callback(new Error('not_authorized'), null);
      }
    });
  })
};

var User = mongoose.model('User', userSchema);
module.exports = User;
