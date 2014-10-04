var app = angular.module('mySite', ['ui.router']);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
