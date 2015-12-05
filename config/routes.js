var admin = require('express')();

module.exports = function(app, wagner){
  var categoriesAdminController = require('../controllers/admin/categories')(wagner);
  admin.get('/categories', categoriesAdminController.index);
  app.use('/admin', admin);
};

