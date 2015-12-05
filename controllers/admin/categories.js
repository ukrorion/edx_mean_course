
var categoriesAdminController = function(wagner){
  var index = wagner.invoke(function(Category){
    return function(req, res, next){
      Category.find({},function(err,docs){
        res.render('admin/categories/index', { categories:docs });
      });
    }
  });

  return {
    index : index
  };
};

module.exports = categoriesAdminController;