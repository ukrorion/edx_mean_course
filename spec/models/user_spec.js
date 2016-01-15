describe('User', function(){

  it('should be defined', function(){
    wagner.invoke(function(User){
      expect(User).toExist();
      var user = new User();
      expect(user._id).toExist();
    });
  });

});
