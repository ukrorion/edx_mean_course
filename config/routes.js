var admin = require('express')();
var categoriesAdminController = require('../controllers/admin/categories_controller');
var HomeController = require('../controllers/home_controller');
var UsersController = require('../controllers/users_controller');

module.exports = function(app){
  admin.get('/categories', categoriesAdminController.index);
  admin.get('/categories/new', categoriesAdminController.new);
  admin.post('/categories/create', categoriesAdminController.create);
  admin.delete('/categories/:id', categoriesAdminController.delete);
  app.use('/admin', admin);

  app.get('/', HomeController.index);
  app.post('/sign_up', UsersController.sign_up);
};
