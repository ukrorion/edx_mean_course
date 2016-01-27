// Load additional libraries
require('../lib/extensions/string');
var mongoose = require('mongoose');

var environments = {
  development : require('./environments/development'),
  production : require('./environments/production'),
  test : require('./environments/test')
};

module.exports = function(app){

  if(!app.get("env")){
    throw new Error('Application did not load environment;')
    process.exit(1);
  }
  switch(app.get('env')){
    case "development":
      environments.development(app);
      break;
    case "test":
      environments.test(app);
      break;
    case "production":
      environments.production(app);
      break;
  }
  mongoose.connect('mongodb://localhost/edx_'+app.get('env'));
};
