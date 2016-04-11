function Arrnumb(maxLimit, sizeNum){
  var chArray = [];
for( i = 0; i < maxLimit; i++ ){
var numb = Math.floor((Math.random()*sizeNum)+1);
    chArray.push(numb);
};
return chArray;
};
var chArray = Arrnumb(10,10);
// append to elem with tag #out meaning of length of chArray
$('#out2').append('<br/>'+chArray.length);
// append to elem with tag #out6 meaning of length of chArray with unique data
$('#out2').append('<br/>'+$.unique(chArray).length);

//$grep - which render data from array which matchs to some requirement
function checkifW(mergedArray, numbers){
     var grepArray =  $.grep(mergedArray, function(item){
return item%numbers == 0;
});
return grepArray;
}

var ArrayGr = checkifW(chArray, 2);

/// each for the function
$(ArrayGr).each(function(idx, item){
   $('#out3').append("<br/>"+ item).css("color","green");

});
// append each elem of array to elem with tag #out6
for (i = 0; i<chArray.length; i++){
  $('#out4').append("<br/>" + chArray[i]);
};

$(function(){
  $.fn.everythird = function(){
    var arr=[];
    $.each(this, function(idx, item){
      if (idx%3 == 0);
      arr.push(item);
    });
    return this.pushStack(arr , "everythird", "");
  }
   $('#clickit').click(function(){
$("div").everythird().css("color", "Red").end().css("font-weigth", "bold");
});
});
