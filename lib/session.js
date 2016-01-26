var wagner = require('wagner-core');

module.exports = function (req, res, next) {
  wagner.invoke(function(User){
    console.log(User);
  });

  var current_user = req.session.current_user;
  console.log(current_user);
  if (!current_user) {
    current_user = req.session.current_user = {}
  }
  current_user['email'] = "test@test.com"

  next();
}
