describe('User', function(){

  before(function(){
    user_factory = require('./../factories/users');
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
      var user = new User(user_factory.user);
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
      var user = new User(user_factory.user);
      expect(user.validateSync()).toBeAn('undefined');
    });
  });

  describe('should validate', function(){
    beforeEach(function(done){
      wagner.invoke(function(User) {
        User.remove({}, done);
      });
    });
    it('email on presence and to mach specific pattern', function(){
      wagner.invoke(function(User){
        var user = new User(user_factory.user);
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
        var user1 = new User(user_factory.user);
        var user2 = new User(user_factory.user);
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
        var user = new User(user_factory.user);
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
        var user = new User(user_factory.user);
        var errors;
        user.password = '';
        errors = user.validateSync().errors;
        expect(errors.password.kind).toBe('required');
        user.password = 'aaaaa';
        errors = user.validateSync().errors;
        expect(errors.password.kind).toBe('minlength');
      });
    });
  });

});
