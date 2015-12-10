var application = require('../app');
var mongoose = require('mongoose');

module.exports = function(){
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
};
