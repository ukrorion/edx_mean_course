var categoriesController = require('../controllers/categories');

module.exports = function(app){
  app.get('/categories', categoriesController.index);
};

