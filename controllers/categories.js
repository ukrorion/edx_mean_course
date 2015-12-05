
var categoriesController = function(wagner){
  var index = wagner.invoke(function(Category){
    return function(req, res, next){
      Category.find({},function(err,docs){
        res.render('categories/index');
      });
    }
  });

  return {
    index : index
  };
};

module.exports = categoriesController;