
$.ajax({
  url: 'https://hearthstonejson.com/json/Basic.enGB.json',
  dataType: 'json',
  type: 'get',
  cash: false,
  success: function(data){
  var arraid = [];
  var arrafac = [];
  var arrarar = [];
  var arraname = [];
$(data).each(function(index, value){
   arraid.push(value.id);
   arrafac.push(value.faction);
   arrarar.push(value.rarity);
   arraname.push(value.name);
});

// this function retrieve only uniq elements from array

var arruniq = arraname.filter(function (element, index, arraname) {
    return arraname.lastIndexOf(element) === index;
});

// this function create hash in the left - name in the right - frequency
var often = arraname.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

//by this way we show length of hash (often)
var long = Object.keys(often).length

//show length of each element in the array
var arrauniq = arruniq.map(function(name) {
  return name.length;
});

//we choose all elements with key flavor from data array
var withflavor = data.filter(function (value) {
    return (value.flavor);
});

//Frequency of elements with the same quantity of charts in the array arrauniq:
var freq = arrauniq.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});


 console.log("Our initial array",data);
 console.log("Frequency of element's repeating in array:", often);
 console.log("Length of unique array:",long);
 console.log("Unique array of names:",arruniq);
 console.log("Length of unique array:",arruniq.length);
 console.log("Array of names:",arraname);
 console.log("Length of array of names:",arraname.length);
 console.log("Length of each name in unique array of names:",arrauniq);
 console.log("All elements from data with flavor:", withflavor);
 console.log("Frequency of elements with the same quantity of charts in the array arrauniq:", freq);
}
});




// $.getJSON('https://hearthstonejson.com/json/Basic.enGB.json',function(data){
//   console.log(data);
// });
