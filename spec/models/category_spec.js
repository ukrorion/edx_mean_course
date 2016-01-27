var Category = require('../../models/category');

describe('Category', function(){

  it('should be defined', function(){
    expect(Category).toExist();
    var category = new Category({_id:'Transformer'});
    expect(category._id).toExist();
  });

});
