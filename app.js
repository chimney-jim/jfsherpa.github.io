var app = angular.module('mySite', ['ui.router']);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'HomeController'
    });
});

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
