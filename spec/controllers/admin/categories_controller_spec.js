var assert = require('assert');
var superagent = require('superagent');
var application = require('../../../app');
var mongoose = require('mongoose');

var URL_ROOT = 'http://localhost:3000';

describe('categoriesAdminController', function() {

  before(function() {
    application.load('test');
    wagner = application.wagner;
    server = application.server(3000);
  });

  after(function() {
    server.close(function(){
      mongoose.connection.close();
    });
  });

 it('should show a list of categories', function(done){
   superagent.
    get(URL_ROOT+'/admin/categories').
    end(function(error, res) {
     if (error) {
       done(error);
     } else {
       assert.equal(res.status, 200);
       done();
     }
   });
 });
});
