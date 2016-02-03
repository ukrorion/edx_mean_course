var HomeController = (function(){
  var index = function(req, res, next){
    res.render('home/index');
  }

  return {
    index : index
  };
})();

module.exports = HomeController;
