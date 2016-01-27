var Category = require('../../models/category');

var categoriesAdminController = (function(){
  var index = function(req, res, next){
    Category.find({},function(err,docs){
      res.render('admin/categories/index', { categories:docs });
    });
  };

  var new_category = function(req, res, next){
    res.render('admin/categories/new');
  };

  var create = function(req, res, next){
    var category = new Category({ _id: req.body._id });
    category.save(function(err,category){
      if(err){
        res.end();
      } else {
        res.redirect('/admin/categories');
      }
    });
  };

  var delete_category = function(req, res, next){
    res.redirect('/admin/categories');
  };

  return {
    index : index,
    new : new_category,
    create : create,
    delete: delete_category
  };
})();

module.exports = categoriesAdminController;
