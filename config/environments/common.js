var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app){
  app.use(express.static(process.cwd() + '/public'));
  app.use(require('morgan')("combined"));
  app.set('views', './views');
  app.set('view engine', 'jade');
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
};
