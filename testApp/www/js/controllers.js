angular.module('testApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // console.log("app ctrl");
})
// dependecies as array of string
.controller('MyStocksCtrl', ['$scope',
 function($scope) {
  // define new scope array
  $scope.myStocksArray = [
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
}])


//we deleted http -service in controller which we used before because we use service from services.js
.controller('StockCtrl', ['$scope', '$stateParams', '$window','stockDataService', 'dateService', 'chartDataService',
function($scope, $stateParams, $window, stockDataService, dateService, chartDataService){
//  "get" - method we put in our services.js and create factory - watch services.js but instead
// we create one more dependency - stockDataService
// "http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail"
console.log(dateService.currentDate());
console.log(dateService.oneYearAgo());

  $scope.ticker = $stateParams.stockTicker;
  $scope.chartView = 4;
  $scope.oneYearAgo = dateService.oneYearAgo();
  $scope.todayDate = dateService.currentDate();

 console.log($scope.oneYearAgo);
  console.log($scope.todayDate);

// use on-listener to listen any events in ionicView after enter events
// when it happen we run getPriceData where we run getPriceData function which call  getPriceData method  and grab data from json file via our service
  $scope.$on("$ionicView.afterEnter", function(){
    getPriceData();
    getDetailsData();
    getChartData();
  });
 // by this function we get the meaning of the chartView from button which we've clicked
  $scope.chartViewFunc = function(n){
    $scope.chartView = n;
  };
// all we wrapped into getPriceData function
function getPriceData(){
//call stockDataService which is in services.js call it's method getPriceData  and put there param - ticker
// by which we gonna grab data of prices  from json file
// assign result to var promise
  var promise = stockDataService.getPriceData($scope.ticker);

  promise.then(function(data){
     console.log(data);
     // bind price data to new scope var which we gonna show
     $scope.stockPriceData = data;
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
