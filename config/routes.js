module.exports = function(app, wagner){
  var categoriesController = require('../controllers/categories')(wagner);
  app.get('/categories', categoriesController.index);
};

