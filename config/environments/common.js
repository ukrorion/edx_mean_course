var bodyParser = require('body-parser');

module.exports = function(app){
  app.use(require('morgan')("combined"));
  app.set('views', './views');
  app.set('view engine', 'jade');
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
};
