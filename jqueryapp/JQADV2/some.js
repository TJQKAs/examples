function Arrnumb(maxLimit, sizeNum){
  var chArray = [];
for( i = 0; i < maxLimit; i++ ){
var numb = Math.floor((Math.random()*sizeNum)+1);
    chArray.push(numb);
};
return chArray;
};
var chArray = Arrnumb(1000,1000);
$('#out6').append('<br/>'+chArray.length);
$('#out6').append('<br/>'+$.unique(chArray).length);

function checkifW(mergedArray, numbers){
     var grepArray =  $.grep(mergedArray, function(item){
return item%numbers == 0;
});
return grepArray;
}

var ArrayGr = checkifW(chArray, 21);

/// each for the function
$(ArrayGr).each(function(idx, item){
   $('#out5').append("<br/>"+ item).css("color","green");

});


for (i = 0; i<chArray.length; i++){
  $('#out6').append("<br/>" + chArray[i]);
};
