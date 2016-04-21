function Arrnumb(maxLimit, sizeNum){
  var chArray = [];
for( i = 0; i < maxLimit; i++ ){
var numb = Math.floor((Math.random()*sizeNum)+1);
    chArray.push(numb);
};
return chArray;
};
var chArray = Arrnumb(1000,2000);
$('#out2').append('<br/>'+chArray.length);
$('#out3').append('<br/>'+$.unique(chArray).length);

for (i = 0; i<chArray.length; i++){
  $('#out1').append("<br/>" + chArray[i]);
};
