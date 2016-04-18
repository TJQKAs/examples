$.listRandomArray = function(elem_array, sizeNum, numb_of_array){
  numb_of_array  =  parseInt(numb_of_array);
  sizeNum  =  parseInt(sizeNum);
  elem_array =  parseInt(elem_array);
  var listArray = [];

       for (j=0;  j <numb_of_array; j++){
        var randArray = $.myRandom(elem_array, sizeNum);
          listArray.push(randArray);
          listArray.sort();
          listArray = $.unique(listArray);
          j = listArray.length;
        };
        return listArray;
    }

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
console.log('listArray.js work');
