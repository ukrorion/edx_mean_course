var express = require('express');
var environment = require('./config/environment');
var routes = require('./config/routes');
var wagner = require('wagner-core');
var app = express();

environment(app,wagner);
routes(app,wagner);

var port = 3000;
app.listen(port, function(){
  console.log("Application started listen port "+ port +" using "+ app.env +" enviroment");
});
