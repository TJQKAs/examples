
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


 console.log(often);
 console.log(long);
 console.log(arruniq);
 console.log(arruniq.length);
 console.log(arraname);
 console.log(arraname.length);



}
});




// $.getJSON('https://hearthstonejson.com/json/Basic.enGB.json',function(data){
//   console.log(data);
// });
