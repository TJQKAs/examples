angular.module('testApp.services', [])
.factory('stockDataService', function($q, $http){

// we gonna create method which return to us requirement data
var getPriceData = function(ticker){
// use $q.defer - method which signalize us whether request was successful or not
  var deferred = $q.defer(),
  // our request url
  url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail";
  $http.get(url)
  .success(function(json){
     var jsonData = json.list.resources[0].resource.fields;
     //happy end!!! deferred - resolved
     deferred.resolve(jsonData);
  })
  // bad end !!! deferred - rejected
    .error(function(error){
     console.log("Price data error : " + error );
     deferred.reject();
    });
    // we should call one of possible promises
   return deferred.promise;

};
  return {
    getPriceData: getPriceData
  };
})
;
