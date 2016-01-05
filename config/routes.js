var admin = require('express')();

module.exports = function(app, wagner){
  var categoriesAdminController = require('../controllers/admin/categories')(wagner);
  admin.get('/categories', categoriesAdminController.index);
  admin.get('/categories/new', categoriesAdminController.new);
  admin.post('/categories/create', categoriesAdminController.create);
  admin.delete('/categories/:id', categoriesAdminController.delete);
  app.use('/admin', admin);
};
