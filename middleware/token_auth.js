TokenAuthenticate = function(user_constructor){
  if(!user_constructor)
    throw new Error('User constructor does not set')
  this.User = user_constructor;
}

TokenAuthenticate.prototype.authenticate = function(req, res, next) {
  var creadential = {
    email: req.body.email,
    password: req.body.password
  };
  this.User.check_credential(creadential, function(err, user) {
    if(err){
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
}

TokenAuthenticate.prototype.ensure_authorized = function (req, res, next) {
  this.User.findOne({token: req.token}, function(err, user) {
    if(err) {
      next(err);
    } else {

    }
  });
}

module.exports = {
  set_response_headers: function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  },
  TokenAuthenticate: TokenAuthenticate
}
