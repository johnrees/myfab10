var venueApp = angular.module('venueApp', ['VenueModel', 'ngTouch']);


// Index: http://localhost/views/venue/index.html

venueApp.controller('IndexCtrl', function ($scope, VenueRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/venue/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/venue.js)
  VenueRestangular.all('venue').getList().then( function(venues) {
    $scope.venues = venues;
  });

  // Native navigation
  steroids.view.navigationBar.show("Official Venues");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/venue/show.html?id=<id>

venueApp.controller('ShowCtrl', function ($scope, $filter, VenueRestangular) {

  // Fetch all objects from the local JSON (see app/models/venue.js)
  VenueRestangular.all('venue').getList().then( function(venues) {
    // Then select the one based on the view's id query parameter
    $scope.venue = $filter('filter')(venues, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  // steroids.view.navigationBar.show("Venue: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
