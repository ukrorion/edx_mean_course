var application = require('../app');
var mongoose = require('mongoose');

global.before(function() {
  expect = require('expect');
  assert = require('assert');
  superagent = require('superagent');
  URL_ROOT = 'http://localhost:3000';

  application.load('test');
  server = application.server(3000);
});

global.after(function() {
  server.close(function(){
    mongoose.connection.close();
  });
});
