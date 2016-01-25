describe('User', function(){

  before(function(){
    user_factory = require('./../factories/users');
    test_user = user_factory.user;
  });

  afterEach(function(done){
    wagner.invoke(function(User) {
      User.remove({}, done);
    });
  });

  it('should be defined', function(){
    wagner.invoke(function(User){
      expect(User).toExist();
      var user = new User();
      expect(user._id).toExist();
    });
  });

  it('should have specific fields', function(){
    wagner.invoke(function(User){
      var user = new User(test_user);
      expect(user.email).toBeA('string');
      expect(user.first_name).toBeA('string');
      expect(user.last_name).toBeA('string');
      expect(user.articles).toBeAn('array');
      expect(user.photo).toBeAn('object');
      expect(user.created_at).toBeAn('object');
    });
  });

  it('should be valid', function(){
    wagner.invoke(function(User){
      var user = new User(test_user);
      expect(user.validateSync()).toBeAn('undefined');
    });
  });

  it('should has default role', function(){
    wagner.invoke(function(User){
      var user = new User(test_user);
      expect(user.role).toBe(User.default_role());
    });
  });

  it('password should be saved as a hash', function(done) {
    wagner.invoke(function(User){
      var user = new User(test_user);
      user.save(function(err){
        if (err)
          return done(err);
        expect(user.password).toNotEqual(test_user.password);
        done();
      });
    });
  });

  describe('methods compare_password', function() {

    beforeEach(function(done){
      wagner.invoke(function(User){
        new User(test_user).save(done);
      });
    });

    it('should find user by email and check if password correct', function(done){
      wagner.invoke(function(User){
        var credential = {
          email: test_user.email,
          password: test_user.password
        }
        User.check_credential(credential, function(err,user){
          if(err)
            done(err)
          expect(user.email).toEqual(test_user.email);
          done();
        });
      });
    });

    it('should send error \'not_authorized\' if credential is wrong', function(done){
      wagner.invoke(function(User){
        var credential = {
          email: test_user.email,
          password: 'wrong password'
        }
        User.check_credential(credential, function(err,user){
          expect(user).toEqual(null);
          expect(err).toExist();
          expect(err.message).toEqual('not_authorized')
          done();
        });
      });
    });

    it('should send error \'not_found\' if user does not exist', function(done){
      wagner.invoke(function(User){
        var credential = {
          email: "example@example.com",
          password: 'wrong password'
        }
        User.check_credential(credential, function(err,user){
          expect(user).toEqual(null);
          expect(err).toExist();
          expect(err.message).toEqual('not_found')
          done();
        });
      });
    });
  });

  describe('should validate', function(){

    it('email on presence and to mach specific pattern', function(){
      wagner.invoke(function(User){
        var user = new User(test_user);
        var errors;
        user.email = '';
        errors = user.validateSync().errors;
        expect(errors.email.kind).toBe('required');
        user.email = 'testtestcom';
        errors = user.validateSync().errors;
        expect(errors.email.kind).toBe('regexp');
      });
    });

    it('email on uniqueness', function(done){
      wagner.invoke(function(User){
        var user1 = new User(test_user);
        var user2 = new User(test_user);
        user1.save(function(err){
          user2.save(function(err){
            expect(err.name).toBe('MongoError');
            expect(err.message).toContain('uplicate key error index');
            done();
          });
        });
      });
    });

    it('first_name and last_name on presence', function(){
      wagner.invoke(function(User){
        var user = new User(test_user);
        var errors;
        user.first_name = '';
        user.last_name = '';
        errors = user.validateSync().errors;
        expect(errors.first_name.kind).toBe('required');
        expect(errors.last_name.kind).toBe('required');
      });
    });

    it('password on presence and to have at least 6 chars', function(){
      wagner.invoke(function(User){
        var user = new User(test_user);
        var errors;
        user.password = '';
        errors = user.validateSync().errors;
        expect(errors.password.kind).toBe('required');
        user.password = 'aaaaa';
        errors = user.validateSync().errors;
        expect(errors.password.kind).toBe('minlength');
      });
    });

    it('role if it is accessible for the user (exists in the app)', function(){
      wagner.invoke(function(User){
        var user = new User(test_user);
        var errors;
        user.role = 'blahblahblahblah';
        errors = user.validateSync().errors;
        expect(errors.role.kind).toBe('not_exist');
      });
    })
  });

});
