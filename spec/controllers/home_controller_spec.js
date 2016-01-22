describe('homeController', function() {
  before(function(done) {
    done();
  });

  after(function(done){
    done();
  });

  it('should get success status on request to the home page', function(done){
    superagent.
    get(URL_ROOT).
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

});
