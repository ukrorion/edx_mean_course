// Load additional libraries
require('../lib/extensions/string');
var models_load = require('../config/models_loader');
var mongoose = require('mongoose');

var environments = {
  development : require('./environments/development'),
  production : require('./environments/production'),
  test : require('./environments/test')
};

var parse_arguments = function(){
  var arguments = process.argv.slice(2);

  arguments = arguments.filter(function(arg){
    return arg.startsWith("--");
  }).map(function(arg){
    return arg.substring(2);
  });

  return arguments;
};

module.exports = function(app,wagner){
  var app_args = parse_arguments();

  if(app_args.indexOf("test") > -1) {
    environments.test(app);
  } else if(app_args.indexOf("production") > -1){
    environments.production(app);
  } else {
    mongoose.connect('mongodb://localhost/edx_development');
    environments.development(app);
  }
  models_load(wagner);
};