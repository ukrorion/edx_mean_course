describe('HomeController', function() {
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

  it('response should contain additional http headers', function(done) {
    superagent.
    get(URL_ROOT).
    end(function(error, res) {
      if (error) {
        done(error);
      } else {
        expect(res.header['access-control-allow-origin']).toEqual('*');
        expect(res.header['access-control-allow-methods']).toEqual('GET, POST');
        expect(res.header['access-control-allow-headers']).toEqual('X-Requested-With,content-type, Authorization');
        done();
      }
    });
  })

});
