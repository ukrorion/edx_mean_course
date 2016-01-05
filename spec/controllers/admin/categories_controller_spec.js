describe('categoriesAdminController', function() {
  before(function(done) {
    var names = [{_id: "Test 1"}, {_id: "Test 2"}, {_id: "Test 3"}, {_id: "Test 4"}, {_id: "Test 5"}];
    wagner.invoke(function(Category){
      Category.create(names, function(err, categoies) {
        if(err){
          done(err);
        } else {
          done();
        }
      });
    });
  });

  after(function(done){
    wagner.invoke(function(Category){
      Category.remove(function(err,removed){
        if(err){
          done(err);
        } else {
          done();
        }
      });
    });
  });

  it('should show a list of categories with 5 items', function(done){
    superagent.
    get(URL_ROOT+'/admin/categories').
    end(function(error, res) {
      if (error) {
        done(error);
      } else {
        assert.equal(res.status, 200);
        assert.equal(res.redirects, []);
        done();
      }
    });
  });

  it('should delete category', function(done) {
    superagent.
    del(URL_ROOT+'/admin/categories/1').end(function(error,res) {
      if(error){
        done(error);
      } else {
        assert.equal(res.status, 302);
        done();
      }
    });
  });

});
