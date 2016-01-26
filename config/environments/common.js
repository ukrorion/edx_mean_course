var bodyParser = require('body-parser');
var express = require('express');
var session = require('express-session');
var session_helper = require('../../lib/session');

module.exports = function(app){
  app.use(express.static(process.cwd() + '/public'));
  app.use(require('morgan')("combined"));
  app.use(session({
                    secret: 'keyboard cat',
                    resave: false,
                    saveUninitialized: true
                  }));
  app.set('views', './views');
  app.set('view engine', 'jade');
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  app.use(session_helper);
};
