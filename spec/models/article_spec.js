describe('Article', function(){

  it('should be defined', function(){
    wagner.invoke(function(Article){
      expect(Article).toExist();
      var article = new Article();
      expect(article._id).toExist();
    });
  });

});