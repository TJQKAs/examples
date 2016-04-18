

(function($){
  $.fn.myPlugin = function(){
    // console.log(this[0], this[1], this[2]);
    // var newArray = [this[0]];
    //    return this.pushStack(newArray);
    return $('div');
  };
})(jQuery);

$(function(){
  console.log($('div').myPlugin());
    console.log($('div').myPlugin().end());
});
console.log("work");
