var User = require("../models/user");

var UsersController = (function(){
  var sign_up = function(req, res){
    var user = new User({
      email : req.body.email,
      password : req.body.password,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
    });
    user.save(function(error){
      if(error){
        res.status(401).send({error: error.toString()});
      } else {
        res.set('authenticate', user.token);
        res.send({email: user.email, full_name : user.first_name + ' ' + user.last_name});
      }
    });
  }

  return {
    sign_up : sign_up
  };
})();

module.exports = UsersController;
