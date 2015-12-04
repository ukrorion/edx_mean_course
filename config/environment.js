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

module.exports = function(app){
  var app_args = parse_arguments();

  if(app_args.indexOf("test") > -1) {
    environments.test(app);
  } else if(app_args.indexOf("production") > -1){
    environments.production(app);
  } else {
    environments.development(app);
  }

};