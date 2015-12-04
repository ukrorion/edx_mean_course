var express = require('express');
var environment = require('./config/environment');
var routes = require('./config/routes');
var app = express();

environment(app);
routes(app);

var port = 3000;
app.listen(port, function(){
  console.log("Application started listen port "+ port +" using "+this.env+" enviroment");
});