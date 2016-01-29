var TokenAuthenticate = require('../../middleware/token_auth').TokenAuthenticate;
var User = require('../../models/user');

describe('TokenAuthenticate middleware', function () {
  before(function(){
    token_auth = new TokenAuthenticate(User);
  });

  it('should be an object contains specific error', function () {
    expect(token_auth).toBeA(TokenAuthenticate);
    expect(token_auth.authenticate).toBeA(Function)
    expect(token_auth.ensure_authorized).toBeA(Function)
  });

  it('constructor should rise error if User constructor not pass as params', function() {
    expect(TokenAuthenticate).toThrow(/User constructor does not set/);
    expect(TokenAuthenticate).withArgs(User).toNotThrow();
  });

  describe('authenticate method', function () {
    before(function(done){
      test_user =require('./../factories/users').user;
      User.create(test_user, function(err,user){
        if(err) done(err);
        done();
      })
    });

    after(function(done){
      User.remove({}, function(){ done(); });
    });

    it('should find user by correct credential and add to request object', function (done) {
      var req = { body: { email: test_user.email, password: test_user.password } }
      token_auth.authenticate(req, {}, function(){
        expect(req.user).toExist()
        done();
      });
    });

    it('should not authorized user by wrong credential and send error \'not_authorized\'', function (done) {
      var req = { body: { email: test_user.email, password: 'wrong password' } }
      token_auth.authenticate(req, {}, function(err){
        expect(req.user).toNotExist();
        expect(err.message).toEqual('not_authorized');
        done();
      });
    });

    it('should not find user by wrong credential and send error \'not_found\'', function (done) {
      var req = { body: { email: "example@example.com", password: 'wrong password' } }
      token_auth.authenticate(req, {}, function(err){
        expect(req.user).toNotExist();
        expect(err.message).toEqual('not_found');
        done();
      });
    });

  });
});
