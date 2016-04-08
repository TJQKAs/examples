angular.module('testApp.services', [])


// new constant service which binds our firebase
.constant('FIREBASE_URL', 'https://testapp08.firebaseio.com/')
///////////////////////////////////////////////////
.factory('encodeURIService', function(){

   return {
     encode: function(string){
       console.log(string);
       return encodeURIComponent(string).replace(/\"/g, "%22").replace(/\ /g, "%20" ).replace(/[ ! '()]/g, escape);
     }
   };
})

////////////////modal service ///////////
.service('modalService',  function($ionicModal){
     this.openModal = function(id){
       var _this = this;

  if(id == 1){
    $ionicModal.fromTemplateUrl('templates/search.html', {
      scope: null,
       controller: 'SearchCtrl'
     }).then(function(modal){
     _this.modal = modal;
     _this.modal.show();
   });

   } else if (id == 2) {
   $ionicModal.fromTemplateUrl('templates/login.html', {
     scope: null,
     controller: 'LoginSearchCtrl'
   }).then(function(modal) {
      _this.modal = modal;
      _this.modal.show();
   });
   } else if(id == 3){
       $ionicModal.fromTemplateUrl('templates/signup.html', {
         controller: 'LoginSearchCtrl'
       }).then(function(modal) {
          _this.modal = modal;
          _this.modal.show();
       });
      }
     };
     this.closeModal = function(){
       var _this = this;
       if(!_this.modal)  return;
       _this.modal.hide();
       _this.modal.remove();
     } ;
})



//////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////
.factory('firebaseRef', function($firebase, FIREBASE_URL){
  var firebaseRef = new Firebase(FIREBASE_URL);
  return firebaseRef;
})

.factory('userService', function($rootScope, firebaseRef, modalService){
  var login = function(user){
    // user method of  Firebase to check authontication object with email and password by calling it's refernce firebaseRef
    firebaseRef.authWithPassword({
      email       : user.email,
      password : user.password
        // call function with 2 arguments which this function can get after we call Firebase  error and we print it or we close  login page
    }, function(error, authData){
      if(error){
   console.log("Login failed:" , error);
      } else {
        $rootScope.currentUser = user;
   modalService.closeModal();
   console.log("Successful authentication:" , authData);
      }
    });
  };
  // function signup  with user arg
  var signup = function(user){
    // user method of  Firebase to create object with email and password by calling it's refernce firebaseRef
    firebaseRef.createUser({
      email       : user.email,
      password : user.password
        // call function with 2 arguments which this function can get after we call Firebase  error and we print it or success that we print also
    }, function(error, userData){
      if(error){
   console.log("Error creating user :" , error );
      } else {
        login(user);
   console.log("Successful created new user with uid:" , userData.uid);
      }
    });
  };
  var logout = function(){
    $rootScope.currentUser = '';
     firebaseRef.unauth();
  };
  ///function was added to resolve the problem whenever we refresh the page we loose the presence of current authentication
  //this function call Firebase method to get info about current user
    var getUser = function(){
       return firebaseRef.getAuth();
    };

    if(getUser()){
      $rootScope.currentUser = getUser;
    }
  /// return reference to function which return smth
  return {
    login: login,
    signup: signup,
    logout: logout
};
})



/////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////
.factory('stockDetailsCacheService', function(CacheFactory){
  var stockDetailsCache;
  if(!CacheFactory.get('stockDetailsCache')){
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
////////////////////////////////////////////////////
.factory('stockPriceCacheService', function(CacheFactory){
  var stockPriceCache;
  if(!CacheFactory.get('stockPriceCache')){
    stockPriceCache = CacheFactory('stockPriceCache',{
      maxAge: 5*1000,
      deleteOnExpire: 'aggressive',
      storageMode: 'localStorage'
    });
  } else {
    stockPriceCache = CacheFactory.get('stockPriceCache');
  }
  return stockPriceCache;
})
///////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////
.factory('fillMyStocksCacheService', function(CacheFactory){
  var myStocksCache;
// if we can't get list of stocks to which I follow
  if(!CacheFactory.get('myStocksCache')){
    myStocksCache = CacheFactory('myStocksCache', {
      storageMode: 'localStorage'
  });
} else {
  myStocksCache = CacheFactory.get('myStocksCache');
}

   var fillMyStocksCache = function(){
      var myStocksArray = [
       {ticker: "GPRO"},
       {ticker: "AAPL"},
       {ticker: "FB"},
       {ticker: "NFLX"},
       {ticker: "TSLA"},
       {ticker: "INTC"},
       {ticker: "MSFT"},
       {ticker: "GE"},
       {ticker: "YHOO"}
     ];
    myStocksCache.put('myStocks', myStocksArray);
   };
   return {
     fillMyStocksCache: fillMyStocksCache
 };
})
//////////////////////////////////////////////////////////
.factory('myStocksCacheService', function(CacheFactory){
  var myStocksCache = CacheFactory.get('myStocksCache');

   return myStocksCache;

})
///////////////////////////////////////////////////////
.factory('myStocksArrayService', function(fillMyStocksCacheService, myStocksCacheService){

  if(!myStocksCacheService.info('myStocks')){
    fillMyStocksCacheService.fillMyStocksCache();
  }
   var myStocks = myStocksCacheService.get('myStocks');
   return  myStocks;

})

///////////////////////////////////////////////////////
.factory('followStockService', function(myStocksArrayService, myStocksCacheService){

  return{
    follow: function(ticker){
      //add var and assign object with prop ticker to which we gonna follow
      var stockToAdd = {"ticker": ticker};
      // use myStocksArrayService to push new following object
      myStocksArrayService.push(stockToAdd);
      // after that we should reset array with following objects
      myStocksCacheService.put('myStocks', myStocksArrayService);
    },
    unfollow: function(ticker){
    // to reject to follow
    // iterate each object in myStocksArrayService
   for(var i =0; i < myStocksArrayService.length; i++){
     // in array ticker prop of object and if  this is equal to current ticker then
     if(myStocksArrayService[i].ticker == ticker){
       // splice object from array
       myStocksArrayService.splice(i, 1);
       //remove it
       myStocksCacheService.remove('myStocks');
       //update myStocks using  updated myStocksArrayService
       myStocksCacheService.put('myStocks', myStocksArrayService);
       break;
     }
   }

  },
    // check if we've choose this ticker before
    checkIfFollow: function(ticker){
      for(var i=0; i< myStocksArrayService.length; i++){
        // if ticker in array is the same , so we've done it we've already followed
        if(myStocksArrayService[i].ticker == ticker){
          // we confirm it
          return true;
        }
      }
        return false;

    }

  };
})
///////////////////////////////////////////////////////////////////////////

.factory('stockDataService', function($q, $http, encodeURIService, stockDetailsCacheService, stockPriceCacheService){

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


  cacheKey = ticker,
  // our request url
  url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail";
  $http.get(url)
  .success(function(json){
     var jsonData = json.list.resources[0].resource.fields;
     //happy end!!! deferred - resolved
     deferred.resolve(jsonData);
     stockPriceCacheService.put(cacheKey, jsonData);
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
///////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////
.factory('newsService', function($q, $http){

   return {
     getNews: function(ticker){
      var deferred = $q.defer(),
      x2js = new X2JS(),
      url = "http://finance.yahoo.com/rss/headline?s=" + ticker;

      $http.get(url)
      .success(function(xml){
        var xmlDoc = x2js.parseXmlString(xml),
        json = x2js.xml2json(xmlDoc),
        jsonData = json.rss.channel.item;
        deferred.resolve(jsonData);
      })
      .error(function(){
        deferred.reject();
        console.log("news error: " + error );
      });
      return deferred.promise;
     }
   };
})
/////////////factory Searching /////
.factory('searchService', function($q, $http){

  return {
    search:  function(query){
      var deferred = $q.defer(),
      //http://d.yimg.com/autoc.finance.yahoo.com/autoc?query=YHOO&callback=YAHOO.Finance.SymbolSuggest.ssCallback//
      url = 'https://s.yimg.com/aq/autoc?query='+query+ '&region=CA&lang=en-CA&callback=YAHOO.util.ScriptNodeDataSource.callbacks';
      YAHOO = window.YAHOO ={
        util:{
          ScriptNodeDataSource:{}
        }
      };
         YAHOO.util.ScriptNodeDataSource.callbacks = function(data){
           var jsonData = data.ResultSet.Result;
           deferred.resolve(jsonData);
         };
       $http.jsonp(url).then(YAHOO.util.ScriptNodeDataSource.callbacks);
       return deferred.promise;
     }
   };
 })

//       YAHOO.Finance.SymbolSuggest.ssCallback = function(data){
//         var jsonData = data.ResultSet.Result;
//         deferred.resolve(jsonData);
//       };
//       $http.jsonp(url).then(YAHOO.Finance.SymbolSuggest.ssCallback);
//       return deferred.promise;
//     }
//   };
// })
