// store object in var, which is responsible for communicating with php or xml file
var xmlHttp = createXmlHttpRequestObject();
// get object and store to var  !!! it's important to use this function in all ajax script
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
