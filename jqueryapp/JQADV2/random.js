$.myRandom = function(elem_array, sizeNum){
  elem_array  =  parseInt(elem_array);
  sizeNum  =  parseInt(sizeNum);
      var  firstArray = [];
      for(i=0; i <= elem_array; i++){
        var numB = Math.floor((Math.random()*sizeNum)+1);
        firstArray.push(numB);
        firstArray = $.unique(firstArray);
        i = firstArray.length;
      };
     return firstArray.sort();
  }
console.log("random.js work");
