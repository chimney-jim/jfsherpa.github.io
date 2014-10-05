var app = angular.module('mySite', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.
    when('/', {
      templateUrl: "partials/home.html",
      controller: 'HomeController'
    });
});

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
