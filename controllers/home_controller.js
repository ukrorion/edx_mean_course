var homeController = function(wagner){
  var index = wagner.invoke(function(){
    return function(req, res, next){
      res.render('home/index');
    }
  });

  return {
    index : index
  };
};

module.exports = homeController;