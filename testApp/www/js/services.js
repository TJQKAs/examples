angular.module('testApp.services', [])

.factory('encodeURIService', function(){

   return {
     encode: function(string){
       console.log(string);
       return encodeURIComponent(string).replace(/\"/g, "%22").replace(/\ /g, "%20" ).replace(/[ ! '()]/g, escape);
     }
   };
})


// new factory which shows us time
.factory('dateService', function($filter) {

var currentDate = function(){
  var d = new Date();
  var date = $filter('date')(d, 'yyyy-MM-dd');
  return date;
};

var oneYearAgo = function(){
  var d = new Date(new Date().setDate(new Date().getDate() - 365));
    var date = $filter('date')(d, 'yyyy-MM-dd');
    return date;
};
// here we return common result as a result of service which includes results from 2 functions
 return {
   currentDate: currentDate,
   oneYearAgo: oneYearAgo
 };
})


.factory('stockDataService', function($q, $http, encodeURIService){

// one more method to retrieve more detailed data about stocks  from another api
var getDetailsData = function(ticker){
  // "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22)&format=json&env=http://datatables.org/alltables.env"
  var deferred=$q.defer(),
  query = 'select * from yahoo.finance.quotes where symbol IN ("'  + ticker + '" ) ',
  url =  'http://query.yahooapis.com/v1/public/yql?q= ' + encodeURIService.encode(query) + ' &format=json&env=http://datatables.org/alltables.env';

  console.log(url);

  $http.get(url)
  .success(function(json){
  var jsonData = json.query.results.quote;
   deferred.resolve(jsonData);
     console.log(jsonData);
    //  var jsonData = json.list.resources[0].resource.fields;
     //happy end!!! deferred - resolved
    //  deferred.resolve(jsonData);
  })
  // bad end !!! deferred - rejected
    .error(function(error){
     console.log("Details data error : " + error );
     deferred.reject();
    });
    // we should call one of possible promises
   return deferred.promise;
};
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
    getPriceData: getPriceData,
    getDetailsData: getDetailsData
  };
})

.factory('chartDataService', function($q, $http, encodeURIService){

  var getHistoricalData = function(ticker, fromDate, todayDate){

  var deferred  = $q.defer(),
  query = 'select * from yahoo.finance.historicaldata where symbol = "' + ticker + '" and startDate =  "' + fromDate + '" and endDate = "' + todayDate + '" ';
  url =  'http://query.yahooapis.com/v1/public/yql?q= ' + encodeURIService.encode(query) + ' &format=json&env=http://datatables.org/alltables.env';

   $http.get(url)
   .success(function(json){
     var jsonData = json.query.results.quote;

    var priceData = [];
    var volumeData =[];

          jsonData.forEach(function(dayDataObject){
            // console.log(dayDataObject);
            var dateToMillis = dayDataObject.Date,
            date = Date.parse(dateToMillis),
            price = parseFloat(Math.round(dayDataObject.Close * 100) / 100).toFixed(3),
            volume = dayDataObject.Volume,

            volumDatum = '[' + date + ',' + volume + ']',
            priceDatum = '[' + date + ',' + price + ']';

          //  console.log(volumDatum, priceDatum);

            volumeData.unshift(volumDatum);
            priceData.unshift(priceDatum);
          });

          var formattedChartData =
          '[{'+
           '"key":' + '"volume",' +
           '"bar":' + 'true,' +
           '"values":' + '[' + volumeData + ']' +
           '},' +
            '{' +
                '"key":' + '"'+ ticker + '",' +
                '"values":' + '[' + priceData + ']' +
          '}]';
     deferred.resolve(formattedChartData);
    //  console.log(formattedChartData);
   })
   .error(function(error){
     console.log("Chart error data : " + error);
     deferred.reject();
   });
   return deferred.promise;

  };
  return {
    getHistoricalData: getHistoricalData
  };

})
