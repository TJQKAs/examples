// store object in var, which is responsible for communicating with php or xml file
var firstLoad;
var xmlHttp = createXmlHttpRequestObject();
// 1- Basic fucntion!!!  get object and store to var  !!! it's important to use this function in all ajax script
function createXmlHttpRequestObject(){
var xmlHttp;
// by this conditonal statement we check whether user us IE as browser
    if(window.ActiveXObject){
      try{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
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

if (!xmlHttp)
alert("can't create that object cause of some problem!");

else
  return xmlHttp;
  console.log(xmlHttp);
}
// 2-Basic funciton!!!
function firstLoad(){
  // firstly we check status of our object - 0 - ready for communicate;
  if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
    // assign to var food data which has been typed in input form with id userInput
    food = encodeURIComponent(document.getElementById("userInput").value);
    //open creates requset with 3 params -  first param -  what type of request we send (GET), second  param - url ; third param - true (should this request handle synchronously)
   xmlHttp.open("GET", "foodstore.php?food=" + food,  true);
  //  whenever we get back our info we want do smth with this info (whenever we get back response from server we want start function  3 Basic function - handleServerResponse)
   xmlHttp.onreadystatechange = handleServerResponse();
   xmlHttp.send(null);
  }else{
    // wait  1 sec and try to request again
   setTimeout(firstLoad, 1000);
  }
}


function handleServerResponse(){
  // object is ready to communticate if we have 4;
  if(xmlHttp.readyState==4){
    // communication successful if we have figure  - 200; else we have some problem with server or xml file;
    if(xmlHttp.status==200){
      // assign to var xmlResonse response of php file
        xmlResponse = xmlHttp.responseXML;
        xmlDocumentElement = xmlResponse.documentElement;
        // by this way we access to our messages  in  php file  and data gives you data from xml file; this message is what we gonna put on our screen
        message = xmlDocumentElement.firstChild.data;
        // find form with id - underInput and put there our var message;
        document.getElementById("underInput").innerHTML = "<span style='color:red'>"  + message + " </span>";
        console.log(message);
        setTimeout('firstLoad', 1000);
    } else {
      alert("Something went wrong!!!!");
    }
  }
}
