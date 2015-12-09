var express = require('express');
var environment = require('./config/environment');
var routes = require('./config/routes');
var wagner = require('wagner-core');
var app = express();


module.exports.load = function(env){
  app.set('env', env || "development");
  environment(app,wagner);
  routes(app,wagner);
};

module.exports.server = function(port){
  var port = port || 3000;
  return app.listen(port, function(){
    console.log("Application started listen port "+ port +" using "+ app.get('env') +" environment");
  });
};
module.exports.app = app;
module.exports.wagner = wagner;



































































































