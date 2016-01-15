var mongoose = require('mongoose');
var articleSchema = require('../db/schemas/article');

var Category = mongoose.model('Article', articleSchema);

module.exports = Category;
