angular.module('app.controllers', ['firebase'])

.controller('AppCtrl', function($scope,$firebaseArray) {
  $scope.uploadImage = function(imageData, incidentID) {
    var FR = new FileReader();

    FR.onload = function(e) {
      var imageString = e.target.result;

	//create URL that refers to a specific event and add images as an array-like object to hold images
      var eventReference = fb.child(&quot;events/&quot; + incidentID);
      var syncArray = $firebaseArray(eventReference.child(&quot;images&quot;));

      $scope.user = Auth.getUser();
      var username = $scope.user.username || '';
      var submitDate = new Date().toISOString().slice(0, 10);

      syncArray.$add({
          imageString: imageString,
          username: username,
          submitDate: submitDate
	    })
      .then(function() {
          console.log('Image has been uploaded');
      });
    };
    FR.readAsDataURL(imageData);
  });

  //...other code here...//
});
