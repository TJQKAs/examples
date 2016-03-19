angular.module('testApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.playlists = [
    { title: 'test value', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

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
  ];
}])

.controller('StockCtrl', ['$scope', '$stateParams', '$http', 'stockDataService',
function($scope, $stateParams, $http, stockDataService){
//  "get" - method we put in our services.js and create factory - watch services.js but instead
// we create one more dependency - stockDataService
// "http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail"

  $scope.ticker = $stateParams.stockTicker;
//call stockDataService which is in services.js call it's method getPriceData  and put there param - ticker
// by which we gonna grab data of prices  from json file
// assign result to var promise
  var promise = stockDataService.getPriceData($scope.ticker);

  promise.then(function(data){
     console.log(data);
  });

}]);
