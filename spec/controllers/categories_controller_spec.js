var assert = require('assert');
var fs = require('fs');
var status = require('http-status');
var superagent = require('superagent');
var application = require('../../app');

var URL_ROOT = 'http://localhost:3000';

describe('categoriesController', function() {

  before(function() {
    application.load('test');
    var app = application.app;
    var wagner = application.wagner;
    var server = application.server(3000);
  });

  after(function() {
    server.close();
  });

 it('should show a list of categories', function(done){
   superagent.get(url+'/categories', function(error, res) {
     assert.ifError(error);
     assert.equal(res.status, 200);
     done();
   })
 });
});
