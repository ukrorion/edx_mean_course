var image_factory = require('./images');
module.exports = {
  user : {
    email : 'test@test.com',
    password : 'test_pass',
    first_name : 'James',
    last_name : 'Bond',
    photo : image_factory.image,
    articles : [],
    created_at: Date.now()
  }
};
