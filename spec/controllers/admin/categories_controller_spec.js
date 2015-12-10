var assert = require('assert');
var superagent = require('superagent');
var preloader = require('../../spec_helper');

var URL_ROOT = 'http://localhost:3000';

describe('categoriesAdminController', function() {
  preloader.call(this);

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
