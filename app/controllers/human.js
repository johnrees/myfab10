var humanApp = angular.module('humanApp', ['HumanModel', 'ngTouch']);


// Index: http://localhost/views/human/index.html

humanApp.controller('IndexCtrl', function ($scope, HumanRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/human/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/human.js)
  HumanRestangular.all('human').getList().then( function(humans) {
    $scope.humans = humans;
  });

  // Native navigation
  steroids.view.navigationBar.show("People");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/human/show.html?id=<id>

humanApp.controller('ShowCtrl', function ($scope, $filter, HumanRestangular) {

  // Fetch all objects from the local JSON (see app/models/human.js)
  HumanRestangular.all('human').getList().then( function(humans) {
    // Then select the one based on the view's id query parameter
    $scope.human = $filter('filter')(humans, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Human: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
