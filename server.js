var application = require('./app');

application.load('development');
application.server(3000);

