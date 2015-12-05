var path = require('path');
var fs = require('fs');
var models = {};

var collect_models = function(){
  var models_path = process.argv[1].split(path.delimiter);
  models_path.pop();
  models_path.push('models');
  var models = fs.readdirSync(path.join.apply(this, models_path));

  return models.map(function(model){
    return model.replace(/\.\w+$/,'').capitalize();
  });
};

module.exports = function(wagner){
  collect_models().forEach(function(name){
    try{
      models[name] = require('../models/' + name.toLowerCase());
      wagner.factory(name, function(){
        return models[name];
      });
      console.log('Model '+ name +' is loaded');
    } catch(err) {
      console.log(err);
    }
  });
};