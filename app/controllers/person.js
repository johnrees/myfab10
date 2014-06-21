var personApp = angular.module('personApp', ['PersonModel', 'ngTouch']);


// Index: http://localhost/views/person/index.html

personApp.controller('IndexCtrl', function ($scope, PersonRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/person/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/person.js)
  PersonRestangular.all('person').getList().then( function(persons) {
    $scope.persons = persons;
  });

  // Native navigation
  steroids.view.navigationBar.show("Person index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/person/show.html?id=<id>

personApp.controller('ShowCtrl', function ($scope, $filter, PersonRestangular) {

  // Fetch all objects from the local JSON (see app/models/person.js)
  PersonRestangular.all('person').getList().then( function(persons) {
    // Then select the one based on the view's id query parameter
    $scope.person = $filter('filter')(persons, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Person: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
