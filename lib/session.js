module.exports = function (req, res, next) {

  var current_user = req.session.current_user;
  if (!current_user) {
    current_user = req.session.current_user = {}
  }
  current_user['email'] = "test@test.com"

  next();
}
