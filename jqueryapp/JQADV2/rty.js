function vali(greetings)
{
  res = false;
  var myArray = ['hello','ciao','salut','hallo','hola','ahoj','czesc'];
  for (var i = 0; i < myArray.length; i++ ) {
  if ( myArray[i].contains(greetings))
  res = true;
  };
  return res;
};
