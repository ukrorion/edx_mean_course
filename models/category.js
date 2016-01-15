var mongoose = require('mongoose');
var categorySchema = require('../db/schemas/category');

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;