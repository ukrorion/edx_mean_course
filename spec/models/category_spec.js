var expect = require('expect');
var application = require('../../app');
var mongoose = require('mongoose');

describe('Category', function(){

  before(function() {
    application.load('test');
    wagner = application.wagner;
    server = application.server(3000);
  });

  after(function(){
    mongoose.connection.close();
    server.close();
  });

  it('should be defined', function(){
    wagner.invoke(function(Category){
      expect(Category).toExist();
      var category = new Category({_id:'Transformer'});
      expect(category._id).toExist();
    });
  });

});