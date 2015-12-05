String.prototype.capitalize = function(){
  var first_char = this.charAt(0).toUpperCase();
  return this.replace(/^./,first_char);
};