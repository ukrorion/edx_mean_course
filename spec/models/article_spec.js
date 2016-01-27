var Article = require('../../models/article.js');

describe('Article', function(){

  it('should be defined', function(){
    expect(Article).toExist();
    var article = new Article();
    expect(article._id).toExist();
  });

});
