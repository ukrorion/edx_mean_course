describe('categoriesAdminController', function() {

 it('should show a list of categories', function(done){
   superagent.
    get(URL_ROOT+'/admin/categories').
    end(function(error, res) {
     if (error) {
       done(error);
     } else {
       assert.equal(res.status, 200);
       done();
     }
   });
 });

});
