module.exports = function(app){
  app.env = "development";
  app.use(require('morgan')("combined"));
  app.set('views', './views');
  app.set('view engine', 'jade');
};

