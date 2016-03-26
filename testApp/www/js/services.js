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

.factory('chartDataCacheService', function(CacheFactory){
  var chartDataCache;
    // if we cannot find chartDataCache in our factory we must create it
    if (!CacheFactory.get('chartDataCache')){
      chartDataCache = CacheFactory('chartDataCache',{
        maxAge: 60*60*8*1000,
        deleteOnExpire: 'aggressive',
        storageMode: 'localStorage'
      });
      //otherwise chartDataCache is equal to what we've had in CacheFactory;
    } else {
      chartDataCache = CacheFactory.get('chartDataCache');
    }
  return chartDataCache;
})


.factory('stockDetailsCacheService', function(CacheFactory){
  var stockDetailsCache;
  if(!CacheFactory.get(stockDetailsCache)){
    stockDetailsCache = CacheFactory('stockDetailsCache',{
      maxAge: 60*1000,
      deleteOnExpire: 'aggressive',
      storageMode: 'localStorage'
    });
  } else {
    stockDetailsCache = CacheFactory.get('stockDetailsCache');
  }

  return stockDetailsCache;

})

.factory('notesCacheService', function(CacheFactory){
   var notesCache;

   if(!CacheFactory.get('notesCache')){
     notesCache = CacheFactory('notesCache',{
       storageMode: 'localStorage'
     });
   }
   else{
     notesCache = CacheFactory.get('notesCache');
   }

   return notesCache;
})



.factory('stockDataService', function($q, $http, encodeURIService, stockDetailsCacheService){

// one more method to retrieve more detailed data about stocks  from another api
var getDetailsData = function(ticker){
  // "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22)&format=json&env=http://datatables.org/alltables.env"
  var deferred=$q.defer(),
  cacheKey = ticker,
  stockDetailsCache = stockDetailsCacheService.get(cacheKey),
  query = 'select * from yahoo.finance.quotes where symbol IN ("'  + ticker + '" ) ',
  url =  'http://query.yahooapis.com/v1/public/yql?q= ' + encodeURIService.encode(query) + ' &format=json&env=http://datatables.org/alltables.env';

  console.log(url);

  if(stockDetailsCache){
    deferred.resolve(stockDetailsCache);
  } else {
  $http.get(url)
  .success(function(json){
  var jsonData = json.query.results.quote;
   deferred.resolve(jsonData);
   stockDetailsCacheService.put(cacheKey, jsonData);
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
  }
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

.factory('chartDataService', function($q, $http, encodeURIService, chartDataCacheService){

  var getHistoricalData = function(ticker, fromDate, todayDate){

   /// variables which we created with chartDataCacheService
    cacheKey = ticker,
    chartDataCache = chartDataCacheService.get(cacheKey);

  var deferred  = $q.defer(),
  query = 'select * from yahoo.finance.historicaldata where symbol = "' + ticker + '" and startDate =  "' + fromDate + '" and endDate = "' + todayDate + '" ';
  url =  'http://query.yahooapis.com/v1/public/yql?q= ' + encodeURIService.encode(query) + ' &format=json&env=http://datatables.org/alltables.env';

   if(chartDataCache){
     deferred.resolve(chartDataCache);
   } else {
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
    //
    chartDataCacheService.put(cacheKey, formattedChartData);
   })
   .error(function(error){
     console.log("Chart error data : " + error);
     deferred.reject();
   });
 }
   return deferred.promise;

  };
  return {
    getHistoricalData: getHistoricalData
  };
})

.factory('notesService', function(notesCacheService){

  return {
    getNotes: function (ticker) {
       return notesCacheService.get(ticker);
    },

    addNote: function(ticker, note){
      var stockNotes = [];
      if(notesCacheService.get(ticker)){
        stockNotes = notesCacheService.get(ticker);
        stockNotes.push(note);
      }
      else {
        stockNotes.push(note);
      }
       notesCacheService.put(ticker, stockNotes);
    },
    deleteNote: function(ticker, index){
         var stockNotes = [];
         stockNotes = notesCacheService.get(ticker);
         stockNotes.splice(index, 1);
         notesCacheService.put(ticker, stockNotes);
    }
  }
})
