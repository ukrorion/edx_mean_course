describe('Category', function(){

  it('should be defined', function(){
    wagner.invoke(function(Category){
      expect(Category).toExist();
      var category = new Category({_id:'Transformer'});
      expect(category._id).toExist();
    });
  });

});