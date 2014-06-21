var eventApp = angular.module('eventApp', ['EventModel', 'ngTouch']);


// Index: http://localhost/views/event/index.html

eventApp.controller('IndexCtrl', function ($scope, EventRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/event/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('event').getList().then( function(events) {
    $scope.events = events;
  });

  // Native navigation
  steroids.view.navigationBar.show("Schedule");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/event/show.html?id=<id>

eventApp.controller('ShowCtrl', function ($scope, $filter, EventRestangular) {

  // Fetch all objects from the local JSON (see app/models/event.js)
  EventRestangular.all('event').getList().then( function(events) {
    // Then select the one based on the view's id query parameter
    $scope.event = $filter('filter')(events, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  // steroids.view.navigationBar.show("Event: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
