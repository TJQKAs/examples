angular.module('testApp.controllers', [])

.controller('AppCtrl', ['$scope', 'modalService',
function($scope, modalService) {
    $scope.modalService = modalService;

}])
// dependecies as array of string
.controller('MyStocksCtrl', ['$scope', 'myStocksArrayService',
 function($scope, myStocksArrayService) {
  // define new scope array
  $scope.myStocksArray = myStocksArrayService;
  console.log(myStocksArrayService);
}])

// add service in contorller and add new variable
//we deleted http -service in controller which we used before because we use service from services.js
.controller('StockCtrl', ['$scope', '$stateParams', '$window','$ionicPopup','followStockService','stockDataService', 'dateService', 'chartDataService','notesService','newsService',
function($scope, $stateParams, $window,$ionicPopup, followStockService, stockDataService, dateService, chartDataService, notesService, newsService){
//  "get" - method we put in our services.js and create factory - watch services.js but instead
// we create one more dependency - stockDataService
// "http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail"
console.log(dateService.currentDate());
console.log(dateService.oneYearAgo());

  $scope.ticker = $stateParams.stockTicker;
  $scope.chartView = 4;
  $scope.oneYearAgo = dateService.oneYearAgo();
  $scope.todayDate = dateService.currentDate();
  $scope.stockNotes = [];
  // pass ticker through method 'checkIfFollow' of the service 'followStockService'
  $scope.following = followStockService.checkIfFollow($scope.ticker);

 console.log($scope.oneYearAgo);
  console.log($scope.todayDate);

 // function which define whether we follow or not
  $scope.toggleFollow = function(){
    // if  we follow
    if($scope.following){
      // call followStockService and fulfill function unfollow to special ticker
      followStockService.unfollow($scope.ticker);
      // turn var following to false because we've followed to ticker before now we reject
      $scope.following = false;
    }
    else {
      // but otherwise we start follow to this ticker by clicking to this toggle
      followStockService.follow($scope.ticker);
      // because we follow now we turn $scope.following to true
      $scope.following = true;
    }
  }



// use on-listener to listen any events in ionicView after enter events
// when it happen we run getPriceData where we run getPriceData function which call  getPriceData method  and grab data from json file via our service
  $scope.$on("$ionicView.afterEnter", function(){
    getPriceData();
    getDetailsData();
    getChartData();
    getNews();
    $scope.stockNotes = notesService.getNotes($scope.ticker);
  });
//////////////////////////////////////////////////////////////////////////////////////////////

$scope.openWindow = function(link){

  console.log("openWindow ->" + link);
};



/////////////////////////////////////////////////////////////////////////////////////////////

 // by this function we get the meaning of the chartView from button which we've clicked
  $scope.chartViewFunc = function(n){
    $scope.chartView = n;
  };
// all we wrapped into getPriceData function

$scope.addNote = function(){
  $scope.note = {title: 'Note', body: '', date: $scope.todayDate, ticker: $scope.ticker};
  // custom popup
  var note = $ionicPopup.show({
    template: '<input type="text" ng-model="note.title" id="stock-note-title"><textarea type="text" ng-model="note.body" id="stock-note-body"></textarea>',
    title: "New note for " + $scope.ticker,
    // subTitle: "Please use normal things",
    scope: $scope,
    buttons: [
      {text: 'Cancel',
       onTap: function(e){
         return;
       }},
      {
        text: '<b>Save<b/>',
        type:'button-balanced',
        onTap: function(e){
          notesService.addNote($scope.ticker, $scope.note);
        }
      }
    ]
  });
  note.then(function(res){
    //update note list in real time
    $scope.stockNotes = notesService.getNotes($scope.ticker);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////
$scope.openNote = function(index, title, body){
  $scope.note = {title: title, body: body, date: $scope.todayDate, ticker: $scope.ticker};
  // custom popup
  var note = $ionicPopup.show({
    template: '<input type="text" ng-model="note.title" id="stock-note-title"><textarea type="text" ng-model="note.body" id="stock-note-body"></textarea>',
    title: $scope.note.title,
    scope: $scope,
    buttons: [
      {text: 'Delete',
       type: 'button-assertive button-small',
              onTap: function(e){
              notesService.deleteNote($scope.ticker, index);
       }
       },
      {text: 'Cancel',
        type: 'button-small',
               onTap: function(e){
               return;
       }},
      {
        text: '<b>Save<b/>',
        type:'button-balanced button-small',
                onTap: function(e){
                notesService.deleteNote($scope.ticker, index);
                notesService.addNote($scope.ticker, $scope.note);
        }
      }
    ]
  });
  note.then(function(res){
    //update note list in real time
    $scope.stockNotes = notesService.getNotes($scope.ticker);
  });
};
///////////////////////////////////////////////////////


function getNews(){
  $scope.newsStories = [];
  var promise = newsService.getNews($scope.ticker);

  promise.then(function(data){
    $scope.newsStories = data;
  });
}





function getPriceData(){
//call stockDataService which is in services.js call it's method getPriceData  and put there param - ticker
// by which we gonna grab data of prices  from json file
// assign result to var promise
  var promise = stockDataService.getPriceData($scope.ticker);

  promise.then(function(data){
     console.log(data);
     // bind price data to new scope var which we gonna show
     $scope.stockPriceData = data;

    if(data.chg_percent >= 0 && data != null){
      $scope.reactiveColor = {'background-color':'rgb(0, 200, 2)', 'border-color' : 'rgba(45, 129, 0, .5)'};
    }
    else  if(data.chg_percent < 0 && data != null){
      $scope.reactiveColor = {'background-color':'rgb(255, 43, 43)', 'border-color' : 'rgba(125, 0, 0, .5)'};
    }
  });
}

function getDetailsData(){
//call stockDataService which is in services.js call it's method getPriceData  and put there param - ticker
// by which we gonna grab data of prices  from json file
// assign result to var promise
  var promise = stockDataService.getDetailsData($scope.ticker);

  promise.then(function(data){
     console.log(data);
     // bind detail data about company to scope var
     $scope.stockDetailsData = data;
  });
}

function getChartData(){
  var promise = chartDataService.getHistoricalData($scope.ticker, $scope.oneYearAgo, $scope.todayDate);
  //////
  console.log(promise);
  promise.then(function(data){

    $scope.myData = JSON.parse(data).map(function(series) {
               series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
               return series;
           });

        console.log($scope.myData);

        var marginBottom = ($window.innerWidth / 100)*20;

        $scope.chartOptions = {
             chart: {
                 type: 'linePlusBarChart',
                 height: 400,
                 margin: {
                     top: 15,
                     right: 0,
                     bottom: marginBottom,
                     left: 0
                 },
                 bars: {
                     forceY: [0]
                 },
                 bars2: {
                     forceY: [0]
                 },
                 interpolate: "cardinal",
                 noData: 'Loading data ...',
                 transitionDuration: 500,
                 color: ['rgb(0, 50, 201)', 'rgb(46, 224, 255)'],
                 x: function(d,i) { return i },
                 xAxis: {
                     axisLabel: 'Time Scale',
                     tickFormat: function(d) {
                         var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
                         if (dx > 0) {
                             return d3.time.format('%x')(new Date(dx))
                         }
                         return null;
                     }
                 },
                 x2Axis: {
                     tickFormat: function(d) {
                         var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
                         return d3.time.format('%b %Y')(new Date(dx))
                     },
                     showMaxMin: false
                 },
                 y1Axis: {
                     axisLabel: 'Vol. $',
                     tickFormat: function(d){
                         return d3.format(',f')(d);
                     },
                     axisLabelDistance: 12
                 },
                 y2Axis: {
                     axisLabel: 'P.$',
                     tickFormat: function(d) {
                         return '$' + d3.format(',.s')(d)
                     }
                 },
                 y3Axis: {
                     tickFormat: function(d){
                         return d3.format(',2s')(d);
                     }
                 },
                 y4Axis: {
                     tickFormat: function(d) {
                         return '$' + d3.format(',.2s')(d)
                     }
                 }
             }
         };
         console.log($scope.chartOptions);





});
}


}]);
