$.listArray = function(elem_array, sizeNum, numb_of_array){
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

console.log('listArray.js work');
