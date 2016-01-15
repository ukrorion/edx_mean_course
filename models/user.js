var mongoose = require('mongoose');
var userSchema = require('../db/schemas/user');

var Category = mongoose.model('User', userSchema);

module.exports = Category;
