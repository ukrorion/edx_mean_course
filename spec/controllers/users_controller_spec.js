var User = require("../../models/user");

describe('UsersController', function() {
  before(function() {
    user_data = require('../factories/users').post_user_data;
    test_user = require('../factories/users').user;
  });

  afterEach(function(done){
    User.remove({}, function(){
      done();
    });
  });

  describe('sign_up path', function () {

    it('should post user data and get success response', function(done){
      superagent.
      post(URL_ROOT+'/sign_up').
      send(user_data).
      end(function(error, res) {
        if (error) {
          done(error);
        } else {
          expect(res.status).toEqual(200);
          expect(res.redirects).toEqual([]);
          done();
        }
      });
    });

    it('should post user data then get user email and auth token', function (done) {
      superagent.
      post(URL_ROOT+'/sign_up').
      send(user_data).
      end(function(error, res) {
        if (error) {
          done(error);
        } else {
          expect(res.header['authenticate']).toExist();
          expect(res.body.email).toEqual('test@test.com');
          expect(res.body.full_name).toEqual('James Bond');
          expect(res.body.password).toNotExist();
          done();
        }
      });
    });

    it('should post user data and get error message in case user exist', function (done) {
      var user = new User(test_user);
      user.save(function(err){
        if(err) done(err);
        superagent.
        post(URL_ROOT+'/sign_up').
        send(user_data).
        end(function(error, res) {
          if (error) {
            expect(res.status).toEqual(401);
            expect(res.body.error).toExist();
            expect(res.body.error).toInclude('User Email must be unique');
            done();
          } else {
            done(res);
          }
        });
      });
    });
  });


});
