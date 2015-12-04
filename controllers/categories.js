var Category = require('../models/category');

var categoriesController = function(){
  var index = function(req, res, next){
    res.send('Test sample');
  };

  return {
    index : index
  };
};

module.exports = categoriesController();