// store object in var, which is responsible for communicating with php or xml file
var xmlHttp = createXmlHttpRequestObject();
// 1- Basic fucntion!!!  get object and store to var  !!! it's important to use this function in all ajax script
function createXmlHttpRequestObject(){
    var xmlHttp;
// by this conditonal statement we check whether user us IE as browser
    if(window.ActiveXObject){
      try{
        xmlHttp = new ActiveXObject("Microsoft.XMLTTP");
      } catch(e){
         xmlHttp = false;
      }
    } else {
      try{
        xmlHttp = new XMLHttpRequest();
      } catch(e){
         xmlHttp = false;

    }
}
if (!xmlHttp){
alert("can't create that object cause of some problem!");
}
else {
  return xmlHttp;
}
// 2-Basic funciton!!!
function process(){
  // firstly we check status of our object - 0 - ready for communicate;
  if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
    // assign to var food data which has been typed in input form with id userInput
    var food = encodeURIComponent(document.getElementById("userInput").value);
    //open creates requset with 3 params -  first param -  what type of request we send (GET), second  param - url ; third param - true (should this request handle synchronously)
   xmlHttp.open("GET","foodstore.php?food=" + food,  true);
  //  whenever we get back our info we want do smth with this info (whenever we get back response from server we want start function  3 Basic function - handleServerResponse)
   xmlHttp.onreadystatechange = handleServerResponse;
   xmlHttp.send(null);
  }else{
    // wait  1 sec and try to request again 
   setTimeout('process()', 1000);
  }
}
