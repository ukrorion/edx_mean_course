var express = require('express');
var environment = require('./config/environment');
var routes = require('./config/routes');
var wagner = require('wagner-core');
var app = express();


module.export.load = function(enviroment){
  app.env = enviroment || "development";
  environment(app,wagner);
  routes(app,wagner);
};

module.export.server = function(port){
  var port = port || 3000;
  return app.listen(port, function(){
    console.log("Application started listen port "+ port +" using "+ app.env +" enviroment");
  });
};
module.export.app = app;
module.export.wagner = wagner;



































































































